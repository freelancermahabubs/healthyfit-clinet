// import { useEffect, useState } from "react";
// import FeaturedCard from "../../../components/Cards/FeaturedCard";

// const FeaturedClass = () => {
//   const [classes, setClasses] = useState([]);
//   console.log(classes);
//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/featured-class`)
//       .then((response) => response.json())
//       .then((classes) => setClasses(classes))
//       .catch((error) => console.error("Error retrieving classes:", error));
//   }, []);
//   return (
//     <motion.div>
//       {classes.map((singleClass) => {
//         <FeaturedCard key={singleClass._id} singleClass={singleClass} />;
//       })}
//     </motion.div>
//   );
// };

// export default FeaturedClass;
