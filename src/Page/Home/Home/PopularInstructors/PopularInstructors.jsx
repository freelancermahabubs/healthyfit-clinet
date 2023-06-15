import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/popular-instructors`)
      .then((response) => response.json())
      .then((data) => setPopularInstructors(data))
      .catch((error) =>
        console.error("Error fetching popular instructors:", error)
      );
  }, []);

  return (
    <div className="px-6">
      <h2 className="lg:text-3xl text-xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-1/2 mx-auto font-bold mb-4 text-center text-white mt-5 uppercase ">
        Popular Instructors
      </h2>
      <div className="grid px-6 lg:grid-cols-3 gap-4">
        {popularInstructors.map((instructor) => (
          <div key={instructor._id} className="bg-white rounded-lg p-4 shadow">
            <img
              src={instructor.instructorImage}
              alt={instructor.instructorName}
              className="w-full mb-2"
            />
            <p className="font-semibold uppercase">
              {instructor.instructorName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
