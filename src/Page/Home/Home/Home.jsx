import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HealthyFit | Home</title>
      </Helmet>
      <Cover />
    </div>
  );
};

export default Home;
