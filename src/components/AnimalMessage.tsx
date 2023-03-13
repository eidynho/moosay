import { useContext, useEffect } from "react";
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
    const { message, updateMessage } = useContext(MessageContext);
    const { animal, updateAnimal } = useContext(AnimalContext);

    useEffect(() => {
        if (staticMessage) {
            updateMessage(staticMessage);
        }

        if (staticAnimal) {
            updateAnimal(staticAnimal);
        }
    }, [staticMessage, staticAnimal]);

    const emptyMessage = !message || message === "<p></p>";

    function maxRepeatMessageWall() {
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
                            : "px-4 pb-8 max-w-xs text-start"
                    }`}
                >
                    <div className="font-mono break-words whitespace-pre-wrap leading-6">
                        <>
                            <div>{"_".repeat(maxRepeatMessageWall())}</div>
                            <span
                                className="block max-h-[36rem] overflow-y-auto pb-1"
                                dangerouslySetInnerHTML={{ __html: message }}
                            ></span>
                            <div>{"-".repeat(maxRepeatMessageWall())}</div>
                            {animalInScreen()}
                        </>
                    </div>
                </div>
            ) : (
                <div className="font-mono flex align-center justify-center w-80 h-60 border border-dashed rounded-lg">
                    <span className="my-auto">{animal} will appear here</span>
                </div>
            )}
        </>
    );
}
