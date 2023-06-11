import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Items = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className=" w-full md:w-auto   ">
      <ul className="flex lg:text-sm font-semibold justify-center items-center gap-x-5">
        <Link>
          <li>Home</li>
        </Link>
        <Link to="/instructors">
          <li>Instructors</li>
        </Link>
        <Link to="/class">
          <li>Classes</li>
        </Link>
        <div className="px-2 ">
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
      </ul>
    </div>
  );
};

export default Items;
