import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { MessageContext } from "../contexts/MessageContext";
import { cow, bat, cat, dog, dolphin, ducks, fish, tux } from "./AnimalsASCII";

interface AnimalMessageProps {
    staticMessage?: string;
    staticAnimal?: string;
    customStyles?: string;
}

export function AnimalMessage({
    staticMessage,
    staticAnimal,
    customStyles,
}: AnimalMessageProps) {
    const { message } = useContext(MessageContext);
    const { animal } = useContext(AnimalContext);

    const emptyMessage = (!message && !staticMessage) || message === "<p></p>";

    function maxRepeatMessageWall() {
        if (staticMessage) {
            return staticMessage.length <= 28 ? staticMessage.length + 1 : 29;
        }
        return message.length <= 28 ? message.length + 1 : 29;
    }

    function animalInScreen() {
        switch (animal) {
            case "cow":
                return cow;
            case "bat":
                return bat;
            case "cat":
                return cat;
            case "dog":
                return dog;
            case "dolphin":
                return dolphin;
            case "ducks":
                return ducks;
            case "fish":
                return fish;
            case "tux":
                return tux;
        }
    }

    return (
        <>
            {!emptyMessage ? (
                <div
                    id="animalPicture"
                    className={`${
                        customStyles
                            ? customStyles
                            : "px-2 pb-8 max-w-xs text-start"
                    }`}
                >
                    <div className="font-mono break-words whitespace-pre-wrap leading-6 w-[17.75rem]">
                        <>
                            <div>{"_".repeat(maxRepeatMessageWall())}</div>
                            <span
                                className="block max-h-[36rem] overflow-y-auto pb-1"
                                dangerouslySetInnerHTML={{
                                    __html: staticMessage ?? message,
                                }}
                            ></span>
                            <div>{"-".repeat(maxRepeatMessageWall())}</div>
                            {animalInScreen()}
                        </>
                    </div>
                </div>
            ) : (
                <div className="font-mono flex align-center justify-center w-[18.75rem] h-60 border border-dashed rounded-lg">
                    <span className="my-auto">
                        {staticAnimal ?? animal} will appear here
                    </span>
                </div>
            )}
        </>
    );
}
