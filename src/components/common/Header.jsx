import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaHeart } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "#BOD2025", to: "home" },
    { name: "Story", to: "story" },
    { name: "Details", to: "details" },
    { name: "Gallery", to: "gallery" },
    { name: "Registry", to: "registry" },
    { name: "RSVP", to: "rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer group"
            onClick={closeMenu}
          >
            <div className="flex items-center gap-3">
              {/* Logo image or text logo */}
              <div className="relative">
                <div className="flex items-center justify-center ">
                  <img src="/images/logo.png" alt="bod logo"  className="object-cover w-12 h-12"/>
                </div>
                <div className="absolute transition duration-300 rounded-full -inset-1 bg-primary/20 blur-sm group-hover:bg-primary/30"></div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl leading-none font-great  ${isScrolled ? 'text-primary' : 'text-light'}`}>
                  David & Dorcas
                </span>
                <span className={`text-xs tracking-wider  font-playfair  ${isScrolled ? 'text-primary' : 'text-light'}`}>
                  December 13, 2025
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-80}
                    className={`relative font-medium transition-colors duration-300 cursor-pointer font-playfair ${isScrolled ? 'text-gray-900' : 'text-light'}  font-manrope hover:text-primary group`}
                    activeClass="text-primary font-semibold"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 transition duration-300 rounded-lg md:hidden hover:bg-light"
            aria-label="Toggle menu"
          >
            {menu ? (
              <FaTimes className={`text-2xl   ${isScrolled ? 'text-primary' : 'text-light'}`}/>
            ) : (
              <FaBars className={`text-2xl   ${isScrolled ? 'text-primary' : 'text-light'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menu && (
          <>
            {/* Backdrop Blur Overlay */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            ></div>

            {/* Mobile Menu Panel */}
            <div className="md:hidden">
              <div className="absolute left-0 right-0 mx-4 mt-2 overflow-hidden border shadow-2xl top-full bg-white/95 backdrop-blur-lg rounded-xl border-white/20">
                <div className="px-4 py-4">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={800}
                          spy={true}
                          offset={-80}
                          onClick={closeMenu}
                          className="block px-4 py-3 font-medium text-gray-700 transition-all duration-300 rounded-lg cursor-pointer font-body hover:text-primary hover:bg-light/50"
                          activeClass="text-primary bg-light font-semibold"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 border-t border-gray-100">
                      <Link
                        to="rsvp"
                        smooth={true}
                        duration={800}
                        onClick={closeMenu}
                        className="block w-full px-4 py-3 font-semibold text-center text-white transition-all duration-300 rounded-lg cursor-pointer bg-primary hover:bg-secondary font-body"
                      >
                        RSVP Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent origin-left transform scale-x-0 transition-transform duration-300"
        style={{
          transform: `scaleX(${Math.min(
            window.scrollY / (document.body.scrollHeight - window.innerHeight),
            1
          )})`,
        }}
      ></div>
    </header>
  );
};

export default Header;
