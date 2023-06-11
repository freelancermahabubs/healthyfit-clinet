import axios from "axios";
import { useState, useEffect } from "react";

const MySelectedClassesPage = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  console.log(selectedClasses);
  useEffect(() => {
    const fetchSelectedClasses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/student/classes`
        );
        setSelectedClasses(response.data);
      } catch (error) {
        console.error("Error fetching selected classes:", error);
      }
    };

    fetchSelectedClasses();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">My Selected Classes</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Instructor</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedClasses.map((classItem) => (
            <tr key={classItem.classId}>
              <td className="px-4 py-2">
                {classItem?.selectedClass?.className}
              </td>
              <td className="px-4 py-2">
                {classItem?.selectedClass?.instructor.name}
              </td>
              <td className="px-4 py-2">
                $ {classItem?.selectedClass?.classPrice}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => deleteSelectedClass(classItem.classId)}
                  className="bg-red-500 text-white rounded px-4 py-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySelectedClassesPage;
