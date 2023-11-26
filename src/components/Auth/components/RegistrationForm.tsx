import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form"
import { User } from "../../../interfaces";
import { MessagesContext } from "../../../providers";
import { handleRegistrationFormData } from "../api";

type Inputs = {
    email: string;
    password: string;
};

export default function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const context = useContext(MessagesContext);
    
    if (context === null) {
        return null;
    }

    const { setIsMessageActive, setMessageText, setMessageStatus } = context;

    const onSubmit: SubmitHandler<Inputs> = async (userData: User) => {
        const registrationResult = await handleRegistrationFormData(userData, setIsMessageActive, setMessageText, setMessageStatus);

        if (registrationResult) {
            return navigate("/login");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center pt-10 px-5 md:max-w-[800px]"
        >
            <div className="w-full flex flex-col md:w-4/5">
                <label
                    htmlFor="email"
                    className={`font-bold ${errors.email && "text-[#DB073D]"}`}
                >
                    Email
                </label>
                <input
                    {...register("email",
                        {
                            required: {
                                value: true,
                                message: "This field is required."
                            },
                        })
                    }
                    type="email"
                    name="email"
                    className={`w-full h-[45px] rounded-lg bg-[rgba(0,0,0,0.6)]
                    mt-1 px-4 outline-none ${errors.email && "border-2 border-[#DB073D]"}`}
                />
                <span className="w-full h-[10px] text-[#DB073D]">{errors.email?.message}</span>
            </div>
            <div className="w-full flex flex-col md:w-4/5 mt-6">
                <label
                    htmlFor="password"
                    className={`font-bold ${errors.password && "text-[#DB073D]"}`}
                >
                    Password
                </label>
                <input
                    {...register("password",
                        {
                            required: {
                                value: true,
                                message: "This field is required."
                            },
                            minLength: {
                                value: 6,
                                message: "Password should be at least 6 characters long."
                            },
                            maxLength: {
                                value: 14,
                                message: "The password should be at most 14 characters long."
                            }
                        })
                    }
                    type="password"
                    name="password"
                    className={`w-full h-[45px] rounded-lg bg-[rgba(0,0,0,0.6)] 
                    mt-1 px-4 outline-none ${errors.password && "border-2 border-[#DB073D]"}`}
                />
                <span className="w-full font-medium h-[10px] text-[#DB073D]">{errors.password?.message}</span>
            </div>
            <button
                type="submit"
                className="w-4/5 md:w-[350px] h-[45px] bg-[#DB073D] mt-12 mx-auto rounded-lg font-bold
                    transition-all md:hover:opacity-70"
            >
                Sign Up
            </button>
        </form>
    )
}