import { createBrowserRouter } from "react-router-dom";
import Registration from "../Auth/Registration";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
    },
    {
        path: "/registration",
        element: <Registration />
    }
],
);