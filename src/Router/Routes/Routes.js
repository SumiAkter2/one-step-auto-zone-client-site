import CheckOut from "../../Components/CheckOut/CheckOut";
import Home from "../../Components/Home/Home";
import Login from "../../Components/LogInPage/Login";
import SignUp from "../../Components/LogInPage/SignUp";
import NotFound from "../../Components/NotFound/NotFound";
import Order from "../../Components/OrderPage/Order";
import Main from "../../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
