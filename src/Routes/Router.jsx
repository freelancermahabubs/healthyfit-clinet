import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../Layout/Main";
import SingUp from "../Page/SingUp/SingUp";
import Login from "../Page/Login/Login";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import AddAClass from "../Page/Dashboard/AddAClass";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <p>hello</p>,
      },
      {
        path: "/dashboard/add-class",
        element: <AddAClass />,
      },
    ],
  },
]);
