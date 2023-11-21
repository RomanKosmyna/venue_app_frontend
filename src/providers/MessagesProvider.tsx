import { createContext, useState } from "react"
import { ChildrenProps } from "../interfaces/children.interface";

export type TMessagesContext = {
    isMessageActive: boolean;
    setIsMessageActive: (isMessageActive: boolean) => void;
    messageText: string;
    setMessageText: (text: string) => void;
};

export const MessagesContext = createContext<TMessagesContext | null>(null);

export default function MessagesProvider({ children }: ChildrenProps) {
    const [messageState, setMessageState] = useState<TMessagesContext>({
        isMessageActive: false,
        setIsMessageActive: (isMessageActive: boolean) => {
            setMessageState((prevState) => ({ ...prevState, isMessageActive }))
        },
        messageText: "",
        setMessageText: (text: string) => {
            setMessageState((prevState) => ({ ...prevState, messageText: text}))
        }
    });

    return (
        <MessagesContext.Provider value={messageState}>
            {children}
        </MessagesContext.Provider>
    )
}