import { useContext, useEffect } from "react";

import { AnimalContext } from "../contexts/AnimalContext";
import { MessageContext } from "../contexts/MessageContext";

import { Tiptap } from "./Tiptap";

export function TextareaComponent() {
    const { animal, updateAnimal } = useContext(AnimalContext);
    const { updateMessage } = useContext(MessageContext);

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

    function updateContent(newContent: string) {
        updateMessage(newContent);
    }

    return (
        <>
            <Tiptap
                updateContent={updateContent}
                placeholder={placeholderMessage}
            />
        </>
    );
}
