import React from "react";
import "./navbar.css";

const Navbar = () =>{
  return (
        <div className='navbar'>
        <div className="screenLeftSide">
            <div className='navbar__title navbar__item'>Home</div></div>
        <div className="screenRightDise">
            <div className='navbar__item'>employe</div>
            <div className='navbar__item'>Contact</div>
            <div className='navbar__item'>Help</div>  
        </div>      
        </div>
    )
  }

  export default Navbar
