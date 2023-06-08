import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../api/useAdmin";
import useInstructor from "../../../api/useInstructor";

const MenuDropdown = () => {
  const { user, logOut, setRole } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  // console.log(role);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown Button */}
        <div
          onClick={toggleOpen}
          className="p-4 md:py-2 w-full md:px-5 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            <div className="px-2 pt-2">
              {isAdmin ? (
                <>
                  <Link to="/admin-dashBoard">Admin DashBoard</Link>
                </>
              ) : isInstructor ? (
                <>
                  <Link to="/instructor-dashBoard">Instructor DashBoard</Link>
                </>
              ) : (
                <>
                  <Link to="/student-dashboard"> Dashboard</Link>
                </>
              )}
            </div>
            {user ? (
              <>
                <div
                  onClick={() => {
                    setRole(null);
                    logOut();
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/singup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
