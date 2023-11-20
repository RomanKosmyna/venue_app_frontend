import { Dispatch, SetStateAction, createContext, useState } from "react"
import { ChildrenProps } from "../interfaces/children.interface";

export type TMessagesContext = {
    isMessageActive: boolean;
    setIsMessageActive: Dispatch<SetStateAction<boolean>>;
};

export const MessagesContext = createContext<TMessagesContext | null>(null);

export default function MessagesProvider({ children }: ChildrenProps) {
    const [isMessageActive, setIsMessageActive] = useState(false);

    return (
        <MessagesContext.Provider value={{ isMessageActive, setIsMessageActive }}>
            {children}
        </MessagesContext.Provider>
    )
}