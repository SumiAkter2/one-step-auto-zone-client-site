import Home from "../../Components/Home/Home";
import Login from "../../Components/LogInPage/Login";
import SignUp from "../../Components/LogInPage/SignUp";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
