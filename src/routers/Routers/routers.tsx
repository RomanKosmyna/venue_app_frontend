import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration",
        element: <Registration />
    }
],
);