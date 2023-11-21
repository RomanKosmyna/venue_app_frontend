import { useContext, useEffect } from "react";
import { MessagesContext, TMessagesContext } from "../../providers";

export default function RequestStatus() {
    const context = useContext<TMessagesContext | null>(MessagesContext);

    if (context === null) {
        return null;
    }
    
    const { isMessageActive, setIsMessageActive, messageText } = context;

    useEffect(() => {
        if (isMessageActive) {
            setTimeout(() => {
                setIsMessageActive(false);
            }, 3000);
        }
    }, [isMessageActive]);

    return (
        <>
            {
                isMessageActive ? (
                    <div className="w-[250px] h-[40px] absolute z-10 right-5 bottom-2 bg-slate-500">
                        <p>{messageText}</p>
                    </div>
                )
                    :
                    null
            }
        </>
    )
}