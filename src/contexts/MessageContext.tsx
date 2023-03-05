import { createContext, useState, ReactNode } from "react";

type MessageType = {
    message: string;
    setMessage: any;
};

export const MessageContext = createContext({} as MessageType);

type MessageContextProvider = {
    children: ReactNode;
};

export function MessageContextProvider({ children }: MessageContextProvider) {
    const [message, setMessage] = useState("");

    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    );
}
