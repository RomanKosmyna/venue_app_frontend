import { urls } from "../../../api";
import { User } from "../../../interfaces/user.interface";
import { SetterFunction } from "../types/auth.types";
import { contextResponseSetter } from "./contextResponseSetter";

export const handleLoginFormData = async (
    userData: User,
    setIsMessageActive: SetterFunction<boolean>,
    setMessageText: SetterFunction<string>,
    setMessageStatus: SetterFunction<number>
) => {

    const response = await fetch(urls.auth.signin, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const responseData = await response.json();

    contextResponseSetter({ response, responseData, setIsMessageActive, setMessageText, setMessageStatus });
};