import React from "react";
import { Helmet } from "react-helmet-async";
import shopBanner from "/images/shop/banner2.jpg";
import Cover from "../shared/Cover";
import { useQuery } from "@tanstack/react-query";
import client from "../api";
import FoodCard from "../components/FoodCard";

const OurShop = () => {
  const { data } = useQuery({
    queryKey: ["menus"],
    queryFn: () => client.get("/menus").then(({ data }) => data),
  });
  // console.log(data);

  const salad = data?.filter((item) => item.category === "salad");
  const pizza = data?.filter((item) => item.category === "pizza");
  const desserts = data?.filter((item) => item.category === "desserts");
  const soup = data?.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <Cover
        img={shopBanner}
        title="Our Shop"
        description="Would you like to try a dish?"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {data?.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OurShop;
