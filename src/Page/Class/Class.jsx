import { useEffect, useState } from "react";

const Class = () => {
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all-class`)
      .then((response) => response.json())
      .then((allClass) => setAllClass(allClass))
      .catch((error) => console.error("Error retrieving classes:", error));
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allClass.map((classData) => (
          <div
            key={classData._id}
            className={`border border-gray-300 p-4 ${
              classData.availableSeats === 0 ? "bg-red-100" : ""
            }`}
          >
            <img
              src={classData.classImage}
              alt={classData.classImage}
              className="w-full mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{classData.name}</h2>
            <p className="text-sm mb-2">
              Instructor: {classData.instructor.name}
            </p>
            <p className="text-sm mb-2">
              Available Seats: {classData.availableSeats}
            </p>
            <p className="text-sm mb-4">Price: ${classData.classPrice}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={classData.availableSeats === 0}
              onClick={() => {
                // Handle select button click
                // Add your logic here
              }}
            >
              {classData.availableSeats === 0 ? "Sold Out" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
