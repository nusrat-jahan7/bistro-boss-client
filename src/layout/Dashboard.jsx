import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-yellow-600">
        <ul className="p-4 pt-7">
          <NavLink
            to="/dashboard/home"
            className="btn btn-ghost flex items-center gap-2 justify-center text-2xl mb-8"
          >
            {" "}
            <FaHome></FaHome> User Home
          </NavLink>
          <NavLink
            to="/dashboard/reservation"
            className="btn btn-ghost flex items-center gap-2 justify-center text-2xl mb-8"
          >
            {" "}
            <FaCalendar></FaCalendar> Reservation
          </NavLink>
          <NavLink
            to="/dashboard/cart"
            className="btn btn-ghost flex items-center gap-2 justify-center text-2xl mb-8"
          >
            {" "}
            <FaShoppingCart></FaShoppingCart> My Cart
          </NavLink>
          <NavLink
            to="/dashboard/bookings"
            className="btn btn-ghost flex items-center gap-2 justify-center text-xl mb-8"
          >
            {" "}
            <FaList></FaList> My Bookings
          </NavLink>
          <div className="divider "></div>

          <NavLink
            to="/"
            className="flex items-center gap-2 justify-center text-white text-xl btn btn-ghost"
          >
            {" "}
            <FaHome></FaHome> Home
          </NavLink>
          <NavLink
            to="/our-shop"
            className="flex items-center gap-2 justify-center text-white text-xl btn btn-ghost"
          >
            {" "}
            <FaShoppingBasket></FaShoppingBasket> Our Shop
          </NavLink>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
