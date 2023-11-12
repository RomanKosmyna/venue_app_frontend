import { Link } from "react-router-dom";

type Props = {
    text: string;
    route: "/login" | "/registration";
    linkText: string;
};

export default function AccountExistence({ text, route, linkText }: Props) {

    return (
        <div className="w-full md:max-w-[800px] flex flex-col items-center px-5 mt-10">
            <p className="text-lg">{text}</p>
            <Link
                to={route}
                className="mt-2 underline text-[#DB073D] transition-all hover:opacity-70"
            >
                {linkText}
            </Link>
        </div>
    )
}