import { Outlet } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-68px)] pt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
