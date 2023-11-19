import useMenu from "../hooks/useMenu";
import SectionTitle from "./SectionTitle";

const OfferMenu = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <section>
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      </section>
      <div  className="grid md:grid-cols-2 gap-x-16 gap-y-8 my-8">
        {offer.map((food) => (
          <div key={food._id}>
            <div className="flex gap-3">
            <div>
              <img className="borderRadius" src={food.image} alt="" />
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{food.name} -----</h3>
                <p className="text-xl font-semibold">$ {food.price}</p>
              </div>
              <p>{food.recipe}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferMenu;
