import React from 'react';
import NavBarOne from './NavBarOne/topNavOne';
import NavBarTwo from './NavBarTwo/topNavTwo';
import TopNavThree from './TopBarThree/topNavThree';

const Navbar = () => {
  return (
    <div className='navbar'>
    <NavBarOne/>
    <NavBarTwo/>
    <TopNavThree/>
    </div>
  );
};

export default Navbar;
