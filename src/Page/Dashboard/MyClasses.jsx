import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/my-class`);
      const result = await response.json();
      setClasses(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>HealthyFit | My Classes</title>
      </Helmet>
      <table className="table w-1/2">
        <thead className="bg-gray-300">
          <tr className="text-end">
            <th>#</th>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Total Enrolled Students</th>
            <th>Feedback</th>
            <th>Available Seats</th>
            <th>Class Price</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, i) => (
            <tr key={cls._id} className="text-end">
              <td>{i + 1}</td>
              <td>
                <img src={cls.classImage} alt="classImage" />
              </td>
              <td>{cls.className}</td>
              <td>{cls.totalEnrolledStudents}</td>
              <td>{cls.feedback}</td>
              <td>{cls.availableSeats}</td>
              <td>${cls.classPrice}</td>
              <td>{cls.status}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <Link to={`/instructor-dashBoard/update-class/${cls._id}`}>
                  <span
                    // onClick={() => setIsEditModalOpen(true)}
                    className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Update</span>
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
