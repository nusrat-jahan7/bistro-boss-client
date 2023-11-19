import { Helmet } from "react-helmet-async";
import bannerMenu from "/images/menu/banner3.jpg"
import Cover from "../shared/Cover";
import OfferMenu from "../components/OfferMenu";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover img={bannerMenu} title="Our Menu" description="Would you like to try a dish?" />
      <OfferMenu/>
    </div>
  );
};

export default OurMenu;
