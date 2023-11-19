import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingBasket,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-70 min-h-screen bg-yellow-600">
        <div className="flex-col text-center mt-4 text-white">
          <h1 className="text-3xl font-bold">Bistro Boss</h1>
          <p className="uppercase tracking-widest">Restaurant</p>
        </div>
        <ul className="p-4 pt-7 space-y-3">
          {isAdmin ? (
            <>
              <NavLink
                to="/dashboard/adminHome"
                className="btn btn-ghost flex items-center gap-2 text-xl mt-4"
              >
                {" "}
                <FaHome></FaHome> Admin Home
              </NavLink>
              <NavLink
                to="/dashboard/addItems"
                className="btn btn-ghost flex items-center gap-2  text-xl"
              >
                {" "}
                <FaUtensils></FaUtensils> Add items
              </NavLink>
              <NavLink
                to="/dashboard/manageItems"
                className="btn btn-ghost flex items-center gap-2  text-xl"
              >
                {" "}
                <FaList></FaList> Manage items
              </NavLink>
              <NavLink
                to="/dashboard/manageBookings"
                className="btn btn-ghost flex items-center gap-2  text-xl "
              >
                {" "}
                <FaBook></FaBook>
                Manage Bookings
              </NavLink>
              <NavLink
                to="/dashboard/users"
                className="btn btn-ghost flex items-center gap-2  text-xl mb-4"
              >
                {" "}
                <HiMiniUserGroup className="text-3xl"></HiMiniUserGroup>
                All users
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/dashboard/home"
                className="btn btn-ghost flex items-center gap-2 text-xl"
              >
                {" "}
                <FaHome></FaHome> User Home
              </NavLink>
              <NavLink
                to="/dashboard/reservation"
                className="btn btn-ghost flex items-center gap-2  text-xl"
              >
                {" "}
                <FaCalendar></FaCalendar> Reservation
              </NavLink>
              <NavLink
                to="/dashboard/cart"
                className="btn btn-ghost flex items-center gap-2 text-xl mb-8"
              >
                {" "}
                <FaShoppingCart></FaShoppingCart> My Cart
              </NavLink>
              <NavLink
                to="/dashboard/bookings"
                className="btn btn-ghost flex items-center gap-2 text-xl mb-8"
              >
                {" "}
                <FaList></FaList> My Bookings
              </NavLink>
            </>
          )}

          <div className="divider "></div>

          <NavLink
            to="/"
            className="flex items-center gap-2 justify-center text-xl btn btn-ghost"
          >
            {" "}
            <FaHome></FaHome> Home
          </NavLink>
          <NavLink
            to="/our-shop"
            className="flex items-center gap-2 justify-center text-xl btn btn-ghost"
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
