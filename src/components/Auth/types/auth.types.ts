export type SetterFunction<T> = (value: T) => void;

export type contextResponseSetterProps = {
    response: any,
    responseData: any,
    setIsMessageActive: SetterFunction<boolean>,
    setMessageText: SetterFunction<string>,
    setMessageStatus: SetterFunction<number>
};