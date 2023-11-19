import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Menu from "../components/Menu";
import ChiefService from "../components/chiefService";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner/>
      <Category/>
      <ChiefService/>
      <Menu/>
    </div>
  );
};

export default Home;
