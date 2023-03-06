import { ChangeEvent, useContext, useEffect } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { MessageContext } from "../contexts/MessageContext";

export function TextareaComponent() {
    const { animal, updateAnimal } = useContext(AnimalContext);
    const { message, updateMessage } = useContext(MessageContext);

    useEffect(() => {
        // verify if href has query share query params
        if (document.location.href.includes("share?")) {
            const queryParamsArray = document.location.search.split("&");

            const queryParamsFormated = queryParamsArray.map((item) => {
                return item.split("=").pop();
            });
            // get message (index 0) and animal (index 1) by query params
            if (queryParamsFormated[0] && queryParamsFormated[1]) {
                const decodedMessage = decodeURI(queryParamsFormated[0]);
                const decodedAnimal = decodeURI(queryParamsFormated[1]);

                updateMessage(decodedMessage);
                updateAnimal(decodedAnimal);
            }
        }
    }, []);

    const placeholderMessage = `Type a message and the ${animal} will repeat...`;

    function handleChangeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
        updateMessage(event.target.value);
    }

    return (
        <textarea
            value={message}
            onChange={handleChangeMessage}
            rows={8}
            placeholder={placeholderMessage}
            autoFocus
            className="w-[21.5rem] max-h-[48rem] font-mono p-4 rounded-lg text-zinc-900 outline-none"
        />
    );
}
