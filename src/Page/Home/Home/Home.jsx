import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";
// import FeaturedClass from "./FeaturedClass";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HealthyFit | Home</title>
      </Helmet>
      <Cover />
      {/* <FeaturedClass /> */}
    </div>
  );
};

export default Home;
