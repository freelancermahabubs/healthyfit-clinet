import { TbFidgetSpinner } from "react-icons/tb";

const UpdateClassForm = ({
  handleSubmit,
  loading,
  handleImageUpdate,
  classData,
  setClassData,
  uploadButtonText,
}) => {
  return (
    <div className="w-full min-h-[calc(20vh-10px)] flex flex-col justify-center items-center text-gray-800 rounded-xl px-5 bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Class name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="className"
                id="className"
                type="text"
                placeholder="Class Name"
                required
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Instructor name
              </label>
              <input
                value={classData?.instructorName}
                onChange={(event) =>
                  setClassData({
                    ...classData,
                    instructorName: event.target.value,
                  })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="instructorName"
                id="instructorName"
                type="text"
                placeholder="Instructor Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Instructor email
              </label>
              <input
                value={classData?.instructorEmail}
                onChange={(event) =>
                  setClassData({
                    ...classData,
                    instructorEmail: event.target.value,
                  })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="instructorEmail "
                id="instructorEmail"
                type="text"
                placeholder="Instructor Email "
                required
              />
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="  text-center">
                  <label>
                    <input
                      onChange={(event) => {
                        handleImageUpdate(event.target.files[0]);
                      }}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className=" gap-2">
              <div className="space-y-1 w-full text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Available seats
                </label>
                <input
                  value={classData?.availableSeats}
                  onChange={(event) =>
                    setClassData({
                      ...classData,
                      availableSeats: event.target.value,
                    })
                  }
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="availableSeats"
                  id="availableSeats"
                  type="number"
                  placeholder="Available Seats"
                  required
                />
              </div>

              <div className="space-y-1 w-64 text-sm ">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Price
                </label>
                <input
                  value={classData?.price}
                  onChange={(event) =>
                    setClassData({ ...classData, price: event.target.value })
                  }
                  className="w-40 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-1/2 p-3 mt-5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md py-3 text-white"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Update A Class"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClassForm;
