import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { MessageContext } from "../contexts/MessageContext";

export function TextareaComponent() {
    const { animal } = useContext(AnimalContext);
    const { message, setMessage } = useContext(MessageContext);

    const placeholderMessage = `Say something and the ${animal} will repeat...`;

    return (
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder={placeholderMessage}
            className="w-5/6 p-4 m-4 rounded-lg text-zinc-900 outline-none"
        />
    );
}
