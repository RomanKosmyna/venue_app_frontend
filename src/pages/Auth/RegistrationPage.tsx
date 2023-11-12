import { Link } from "react-router-dom";

export default function RegistrationPage() {
    
    return (
        <main className="w-full min-h-screen flex flex-col items-center relative bg-auth bg-center bg-cover bg-no-repeat pt-20 px-5 pb-5 overflow-hidden">
            <h1 className="flex flex-col text-center">
                <span className="text-5xl">Welcome to</span>
                <span className="text-3xl mt-3">Venue App</span>
            </h1>
            <form
                action=""
                className="w-full flex flex-col items-center pt-10 px-5 md:max-w-[800px]"
            >
                <div className="flex flex-col w-4/5">
                    <label htmlFor="email" className="font-bold">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full h-[45px] border-none rounded-lg bg-[rgba(0,0,0,0.6)] mt-1 px-4"
                    />
                </div>
                <div className="flex flex-col w-4/5 mt-5">
                    <label htmlFor="password" className="font-bold">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full h-[45px] border-none rounded-lg bg-[rgba(0,0,0,0.6)] mt-1 px-4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-4/5 md:w-[350px] h-[45px] bg-[#DB073D] mt-7 mx-auto rounded-lg font-bold
                    transition-all hover:opacity-70"
                >
                    Sign Up
                </button>
                <div className="w-full flex flex-col items-center mt-10">
                    <p className="text-lg">Already have an account?</p>
                    <Link
                        to="/login"
                        className="mt-2 underline text-[#DB073D] transition-all hover:opacity-70"
                    >
                        Sign In
                    </Link>
                </div>
            </form>
        </main>
    )
}