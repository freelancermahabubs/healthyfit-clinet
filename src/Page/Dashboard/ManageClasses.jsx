import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/classes`
      );
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (classId) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/classes/${classId}/approve`,
        {
          status: "approved",
        }
      );
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/classes/${classId}/deny`,
        {
          status: "denied",
        }
      );
      fetchClasses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendFeedback = async (classId) => {
    // Implement the logic to open the modal and handle sending feedback
    // You can use a state variable to track the selected class and pass it to the modal component
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td>{classItem.image}</td>
              <td>{classItem.name}</td>
              <td>{classItem.instructor.name}</td>
              <td>{classItem.instructor.email}</td>
              <td>{classItem.availableSeats}</td>
              <td>{classItem.price}</td>
              <td>{classItem.status}</td>
              <td>
                {classItem.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(classItem._id)}
                      disabled={classItem.status !== "pending"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(classItem._id)}
                      disabled={classItem.status !== "pending"}
                    >
                      Deny
                    </button>
                    <button onClick={() => handleSendFeedback(classItem._id)}>
                      Send Feedback
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
