import React, { useEffect } from 'react';
import NavBarOne from './NavBarOne/topNavOne';
import SecondBar from './secondbar';
import './navbar.css'; // Ensure CSS is imported

const Navbar = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      let topNav = document.querySelector(".topNavOne");
      let secondNav = document.querySelector(".secondbar");

      if (window.scrollY > topNav.offsetHeight) {
        secondNav.classList.add("fixed");
      } else {
        secondNav.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <NavBarOne />
      <SecondBar />
    </div>
  );
};

export default Navbar;
