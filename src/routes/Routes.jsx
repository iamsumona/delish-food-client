import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import ChefDetails from "../pages/ChecfDetails/ChefDetails";
import ViewRecipes from "../pages/View Recipes/ViewRecipes";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "chefdetails",
        element: <ChefDetails></ChefDetails>,
        // children:[
        //   {
        //     path:':id',
        //     element:<ViewRecipes></ViewRecipes>
        //   }


        // ]
      },
      {
        path: "chefdetails/:id",
        element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        loader: (({ params }) => fetch(`https://server-mushfikyeasirpk.vercel.app/chefdetails/${params.id}`))
      },

      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]


  },

]);

export default router;