import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="px-2 py-2 bg-green-600">
      <div className="container flex items-center justify-between px-4 py-1 bg-red-600 md:px-10">
        <Link to="home" smooth={true} duration={500}  className="cursor-pointer">
          <img
            src="/images/logo.png"
            alt="bod logo"
            className="object-cover h-14 w-15"
          />
        </Link>
        <button onClick={toggleMenu} className="flex cursor-pointer md:hidden">
          {menu ? (
            <FaTimes className="text-2xl text-primary" />
          ) : (
            <FaBars className="text-2xl text-primary" />
          )}
        </button>
        <nav className="hidden md:flex">
          <ul className="flex items-start gap-[30px]">
            <Link to="home" smooth={true} duration={500}>
              #BOD2025
            </Link>
            <Link to="story" smooth={true} duration={500}>
              Story
            </Link>
            <Link to="details" smooth={true} duration={500}>
              Details
            </Link>
            <Link to="registry" smooth={true} duration={500}>
              Registry
            </Link>
            <Link to="gallery" smooth={true} duration={500}>
              Gallery
            </Link>
            <Link to="rsvp" smooth={true} duration={500}>
              RSVP
            </Link>
          </ul>
        </nav>
      </div>
      {menu &&  <div className="container flex flex-col items-start justify-start gap-6 px-4 py-2 bg-red-600 border-t md:hidden">
      <nav>
          <ul className="flex flex-col gap-[25px]">
            <Link to="home" smooth={true} duration={500}>
              #BOD2025
            </Link>
            <Link to="story" smooth={true} duration={500}>
              Story
            </Link>
            <Link to="details" smooth={true} duration={500}>
              Details
            </Link>
            <Link to="registry" smooth={true} duration={500}>
              Registry
            </Link>
            <Link to="gallery" smooth={true} duration={500}>
              Gallery
            </Link>
            <Link to="rsvp" smooth={true} duration={500}>
              RSVP
            </Link>
          </ul>
        </nav>
      </div>}
    </header>
  );
};

export default Header;
