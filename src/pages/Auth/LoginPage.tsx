import AccountExistence from "../../components/Auth/components/AccountExistence";
import LoginForm from "../../components/Auth/components/LoginForm";

export default function LoginPage() {

    return (
        <main className="w-full min-h-screen flex flex-col items-center relative bg-auth bg-center bg-cover bg-no-repeat pt-20 px-5 pb-5 overflow-hidden">
            <h1 className="flex flex-col text-center">
                <span className="text-5xl">Welcome to</span>
                <span className="text-3xl mt-3">Venue App</span>
            </h1>
            <h2 className="font-medium text-3xl mt-10">Sign In</h2>
            <LoginForm />
            <AccountExistence
                text="Do not have an account?"
                route="/registration"
                linkText="Sign Up"
            />
        </main>
    )
}