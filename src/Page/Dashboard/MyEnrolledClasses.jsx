const MyEnrolledClasses = ({ enrolledClasses }) => {
  return (
    <div>
      <h2>My Enrolled Classes</h2>
      {/* {enrolledClasses.map((class) => (
        <div key={class.id} className="border p-4 mb-4">
          <h3>{class.name}</h3>
          <p>{class.description}</p>
          <p>Price: {class.price}</p>
        </div>
      ))} */}
    </div>
  );
};

export default MyEnrolledClasses;
