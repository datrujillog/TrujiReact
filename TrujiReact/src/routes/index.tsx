import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";
import Root from "./root";
import ListUser from "../components/listUser";
import Contact from "../components/contact";
import ErrorPage from "./error-page";
import Contactos from "../components/contactos";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },

    {
        path: "/users",
        element: <ListUser />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/contacts/:contactId",
        element: <Contactos />,
    },
    {
        errorElement: <ErrorPage />,
    },

]);

export default router;