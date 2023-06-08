import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../Layout/Main";
import SingUp from "../Page/SingUp/SingUp";
import Login from "../Page/Login/Login";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

import AddAClass from "../Page/Dashboard/AddAClass";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../Page/Dashboard/ManageUsers";

import AdminDashBoard from "../Layout/AdminDashBoard";
import InstructorDashBoard from "../Layout/InstructorDashBoard";
import ManageClasses from "../Page/Dashboard/ManageClasses";
import StudentDashboard from "../Layout/StudentDashboard";
import MySelectedClasses from "../Page/Dashboard/MySelectedClasses";
import Payment from "../Page/Dashboard/Payment";
import MyEnrolledClasses from "../Page/Dashboard/MyEnrolledClasses";

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
    path: "/admin-dashBoard",
    element: (
      <PrivateRoute>
        <AdminDashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "manage-class",
        element: (
          <AdminRoutes>
            <ManageClasses />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },
    ],
  },
  {
    path: "/instructor-dashBoard",
    element: (
      <PrivateRoute>
        <InstructorDashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-class",
        element: <AddAClass />,
      },
      {
        path: "my-class",
        element: <ManageUsers />,
      },
    ],
  },
  {
    path: "/student-dashBoard",
    element: (
      <PrivateRoute>
        <StudentDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-selected-class",
        element: <MySelectedClasses />,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClasses />,
      },
      {
        path: "payments",
        element: <Payment />,
      },
    ],
  },
]);
