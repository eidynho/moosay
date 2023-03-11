import { useContext } from "react";

import { MessageContext } from "../contexts/MessageContext";

import { Tiptap } from "./Tiptap";

export function MessageField() {
    const { updateMessage } = useContext(MessageContext);

    const placeholderMessage = `Type a message and the animal will repeat...`;

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
