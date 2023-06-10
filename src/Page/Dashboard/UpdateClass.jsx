import { useState } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/imageUpload";
import UpdateClassForm from "../../components/Forms/UpdateClassForm";
import useAuth from "../../hooks/useAuth";

const UpdateClass = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const navigate = useNavigate();
  // handleFrom Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const className = form.className.value;
    const instructorName = form.displayName;
    const instructorEmail = form.email;
    const availableSeats = form.availableSeats.value;
    const classPrice = form.price.value;
    const classImage = form.image.files[0];
    // upload Imag
    console.log(classPrice);
    setUploadButtonText("Uploading...");
    imageUpload(classImage)
      .then((data) => {
        const classesData = {
          classImage: data.data.display_url,
          className,
          instructorName,
          instructorEmail,
          availableSeats,
          classPrice,

          instructor: {
            name: user?.displayName,
            image: user.photoURL,
            email: user?.email,
          },
        };
        // post room data to server
        classesData
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            toast.success("Class Added SuccessFull");
            navigate("/instructor-dashBoard/my-class");
          })
          .catch((error) => console.log(error));

        setLoading(false);
      })

      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const handleImageChange = (classImage) => {
    setUploadButtonText(classImage.name);
  };
  return (
    <UpdateClassForm
      handleSubmit={handleSubmit}
      loading={loading}
      handleImageChange={handleImageChange}
      uploadButtonText={uploadButtonText}
      user={user}
    />
  );
};

export default UpdateClass;
