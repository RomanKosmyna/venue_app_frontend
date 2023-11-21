import { urls } from "../../../api";
import { User } from "../../../interfaces/user.interface";

type SetterFunction<T> = (value: T) => void;

export const handleFormData = async (
    userData: User, 
    setIsMessageActive: SetterFunction<boolean>,
    setMessageText: SetterFunction<string>,
    setMessageStatus: SetterFunction<number>
) => {

    const response = await fetch(urls.auth.signup, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const responseData = await response.json();

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
    
    return response.ok;
}