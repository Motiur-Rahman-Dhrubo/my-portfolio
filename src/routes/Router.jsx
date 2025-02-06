import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import AboutMePage from "../components/AboutMePage/AboutMePage";

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
        //     {
        //         path: "/my-profile",
        //         element: <PrivateRoute>
        //             <MyProfile></MyProfile>
        //         </PrivateRoute>,
        //     },
        //     {
        //         path: "/about-dev",
        //         element: <AboutDev></AboutDev>,
        //     },
        //     {
        //         path: "/brand/:id",
        //         element: <PrivateRoute>
        //             <ExpectedBrand></ExpectedBrand>
        //         </PrivateRoute>,
        //         loader: ({ params }) => fetch('/brands.json')
        //             .then(res => res.json())
        //             .then(brands => brands.find(brand => brand._id === params.id))
        //     },
        //     {
        //         path: "/sign-up",
        //         element: <SignUp></SignUp>,
        //     },
        //     {
        //         path: "/login",
        //         element: <Login></Login>,
        //     },
        //     {
        //         path: "/forget-password",
        //         element: <ForgetPassword></ForgetPassword>,
        //     },
        ],
    },
]);

export default Router;