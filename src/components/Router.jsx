import {createBrowserRouter, RouterProvider} from "react"
import App from "../App"
import Homepage from "./Homepage"

const Router = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/homepage",
                element: <Homepage />,
            }
        ]
    );
    return <RouterProvider router = {router} />;
}

export default Router;