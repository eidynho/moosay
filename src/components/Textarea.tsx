import { ChangeEvent, useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { MessageContext } from "../contexts/MessageContext";

export function TextareaComponent() {
    const { animal } = useContext(AnimalContext);
    const { message, setMessage } = useContext(MessageContext);

    const placeholderMessage = `Type a message and the ${animal} will repeat...`;

    function handleChangeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
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
