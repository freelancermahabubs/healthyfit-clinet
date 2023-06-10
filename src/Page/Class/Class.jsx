import axios from "axios";
import { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Class = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-class`
      );
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleSelect = async (classId) => {
    if (!user) {
      alert("Please log in before selecting the course.");
      return navigate("/login");
    }

    const selectedClass = classes.find(
      (classItem) => classItem._id === classId
    );

    if (selectedClass.availableSeats === 0) {
      alert("No available seats for this class.");
      return;
    }

    // Check if the user is an admin or instructor
    const isAdminOrInstructor =
      isAdmin === "admin" || isInstructor === "instructor";

    if (isAdminOrInstructor) {
      alert("Admins/Instructors cannot select the course.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/classes/select`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ classId }),
        }
      );

      if (response.ok) {
        alert("Course selected successfully!");
        // Perform any necessary UI updates or redirects after successful selection
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error selecting course:", error);
    }
  };
  return (
    <div className="flex flex-wrap justify-center">
      {classes.map((cls) => (
        <div
          key={cls._id}
          className={`max-w-sm rounded overflow-hidden shadow-lg ${
            cls.availableSeats === 0 ? "bg-red-200" : "bg-white"
          } m-4`}
        >
          <img className="w-full" src={cls.classImage} alt={cls.classImage} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cls.className}</div>
            <p className="text-gray-700 text-base">
              Instructor: {cls.instructor.name}
            </p>
            <p className="text-gray-700 text-base">
              Available Seats: {cls.availableSeats}
            </p>
            <p className="text-gray-700 text-base">Price: ${cls.classPrice}</p>
            <button
              className={`mt-4 px-4 py-2 rounded-md ${
                cls.availableSeats === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500"
              }`}
              onClick={() => handleSelect(cls._id)}
              disabled={cls.availableSeats === 0}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Class;
