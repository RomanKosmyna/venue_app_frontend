import { useContext } from "react";
import { MessagesContext } from "../../providers";

type Props = {
    messageText: string;
    requestStatus: string;
};

export default function RequestStatus({ messageText, requestStatus }: Props) {
    const context = useContext(MessagesContext);
    console.log(context);
    return (
        <div className="w-[250px] h-[40px] absolute z-10 right-0 bottom-0 bg-slate-500">
            <p>{messageText}</p>
        </div>
    )
}