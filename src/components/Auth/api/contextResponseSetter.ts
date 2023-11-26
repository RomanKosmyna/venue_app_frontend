import { contextResponseSetterProps } from "../types/auth.types";

export const contextResponseSetter = (
    { response, responseData, setIsMessageActive, setMessageText, setMessageStatus }
        : contextResponseSetterProps
) => {
    if (response.status === 201) {
        setIsMessageActive(true);
        setMessageText(responseData.message);
        setMessageStatus(response.status);
    }
    if (response.status !== 201) {
        setIsMessageActive(true);
        setMessageText(responseData.message);
        setMessageStatus(response.status);
    }
}