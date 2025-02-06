import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import AboutMePage from "../components/AboutMePage/AboutMePage";
import MyProjects from "../components/MyProjects/MyProjects";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/projects.json'),
            },
            {
                path: "/about-me",
                element: <AboutMePage></AboutMePage>,
            },
            {
                path: "/my-projects",
                element: <MyProjects></MyProjects>,
            },
        ],
    },
]);

export default Router;