const PopularClassesCard = ({ classItem }) => {
  const { classImage, className, classPrice, instructor, availableSeats } =
    classItem.selectedClass;
  console.log(classItem);
  return (
    <div className=" min-h-full rounded overflow-hidden shadow-lg bg-white mt-4">
      <img src={classImage} alt="image" />
      <div className="ml-3 space-y-1">
        <h2 className="text-2xl font-bold pt-2">Class Name :{className}</h2>
        <p className=" font-semibold">Price: ${classPrice}</p>
        <p className=" font-semibold">Instructor Name: {instructor?.name}</p>
        <p className=" font-semibold">Available Seats: {availableSeats}</p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
