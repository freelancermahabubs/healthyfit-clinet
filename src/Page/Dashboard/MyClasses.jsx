import { useEffect } from "react";
import { useState } from "react";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
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
              <td>
                <button className=" p-3  text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md py-3 text-white">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
