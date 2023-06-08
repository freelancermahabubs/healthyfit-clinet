import { useState } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/imageUpload";
import useAuth from "../../hooks/useAuth";
import AddClassForm from "../../components/Forms/AddClassForm";

const AddAClass = () => {
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
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const image = form.image.files[0];
    // upload Imag
    setUploadButtonText("Uploading...");
    imageUpload(image)
      .then((data) => {
        const roomData = {
          image: data.data.display_url,
          location,
          className,
          instructorName,
          instructorEmail,
          availableSeats,
          price,

          instructor: {
            name: user?.displayName,
            image: user.photoURL,
            email: user?.email,
          },
        };

        // post room data to server
        AddAClass(roomData)
          .then((data) => {
            console.log(data);
            setUploadButtonText("Uploaded!");
            setLoading(false);
            toast.success("Class Added SuccessFull");
            navigate("/dashboard/my-class");
          })
          .catch((error) => console.log(error));

        setLoading(false);
      })

      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  return (
    <AddClassForm
      handleSubmit={handleSubmit}
      loading={loading}
      handleImageChange={handleImageChange}
      uploadButtonText={uploadButtonText}
      user={user}
    />
  );
};

export default AddAClass;
