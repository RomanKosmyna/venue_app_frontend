import { useContext, useEffect } from "react";
import { MessagesContext, TMessagesContext } from "../../providers";

export default function RequestStatus() {
    const context = useContext<TMessagesContext | null>(MessagesContext);

    if (context === null) {
        return null;
    }

    const { isMessageActive, setIsMessageActive, messageText, status } = context;

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
                    <div className={`min-w-[250px] h-[40px] absolute z-10 right-5 bottom-2 bg-gradient-to-r
                    rounded-md py-2 px-4 flex justify-center md:justify-start items-center font-[600]
                    ${status === 201 && "from-[#065f46] to-[#0d9488]"} 
                    ${status === 400 && "from-[#9f1239] to-[#f43f5e]"}`}
                    >
                        <p>{messageText}</p>
                    </div>
                )
                    :
                    null
            }
        </>
    )
}