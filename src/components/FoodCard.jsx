import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import client from "../api";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const { name, image, recipe, price, _id } = item;

  const handleCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      client.post("/carts", cartItem).then(({ data }) => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please Login!!",
        text: "You won't be able to add cart without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="">
          <img src={image} alt="Shoes" className="rounded-t-xl" />
        </figure>
        <p className="text-white bg-yellow-600 text-xl absolute right-0 mt-2 mr-2 px-3 rounded-xl">
          $ {price}{" "}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {name} </h2>
          <p className="line-clamp-3 mb-2"> {recipe} </p>
          <div className="card-actions">
            <button
              onClick={() => handleCart()}
              className="btn btn-sm border-b-4 border-b-yellow-500 hover:border-b-yellow-500 hover:bg-black hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
