import { ChildrenProps } from "../interfaces/children.interface";
import MessagesProvider from "./MessagesProvider";

export default function Providers({ children }: ChildrenProps) {

    return (
        <MessagesProvider>
            {children}
        </MessagesProvider>
    )
}