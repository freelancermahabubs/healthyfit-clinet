import { Link } from "react-router-dom";

const Items = () => {
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
      </ul>
    </div>
  );
};

export default Items;
