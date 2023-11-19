import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const menus = (
    <>
      <NavLink className="px-3 text-lg font-semibold">Home</NavLink>
      <NavLink className="px-3 text-lg font-semibold">Contact Us</NavLink>
      <NavLink to="/our-menu" className="px-3 text-lg font-semibold">
        Our Menu
      </NavLink>
      <NavLink to="/our-shop" className="px-3 text-lg font-semibold">
        Our Shop
      </NavLink>
      <NavLink to="/dashboard/cart" className="btn btn-sm">
        <FaCartPlus className="text-xl"></FaCartPlus>
        <div className="badge badge-secondary">+{cart.length}</div>
      </NavLink>
    </>
  );

  return (
    <div className="drawer fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 ">
            <div className="flex-col">
              <h1 className="text-xl font-bold">Bistro Boss</h1>
              <p className="uppercase tracking-widest">Restaurant</p>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-3">{menus}</ul>
            {user?.email ? (
              <button onClick={() => logOut()} className="btn btn-sm">
                Log Out
              </button>
            ) : (
              <Link to="/login" className="btn btn-sm">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">{menus}</ul>
      </div>
    </div>
  );
};

export default NavBar;
