import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";

const navigation = [
  { id: 1, name: "Dashboard", path: "/dashboard" },
  { id: 2, name: "Cart Page", path: "/cart" },
  { id: 3, name: "Orders", path: "/orders" },
  { id: 4, name: "Check Out", path: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="h-6 w-6" />
          </Link>

          {/* search input */}
          <div className="relative w-40 sm:w-72 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2 font-bold" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* right side */}
        <div className=" relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500 " : ""
                    }`}
                  />
                </button>

                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div className=" absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.id} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.path}
                            className=" block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-md"
          >
            <HiOutlineShoppingCart className="" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
