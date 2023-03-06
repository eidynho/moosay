import { createContext, useState, ReactNode } from "react";

type MessageType = {
    message: string;
    updateMessage: (value: string) => void;
};

export const MessageContext = createContext({} as MessageType);

type MessageContextProvider = {
    children: ReactNode;
};

export function MessageContextProvider({ children }: MessageContextProvider) {
    const [message, setMessage] = useState("");

    function updateMessage(value: string) {
        setMessage(value);
    }

    return (
        <MessageContext.Provider value={{ message, updateMessage }}>
            {children}
        </MessageContext.Provider>
    );
}
