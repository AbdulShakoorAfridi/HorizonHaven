import React from "react";
import logo from "../assets/property-logo 1.svg";
import { NavLink } from "react-router-dom";

const links =[
  {
    id:1,
    title:"Home",
    link:"/"
  },
  {
    id:2,
    title:"Properties",
    link:"/properties"
  },
  {
    id:3,
    title:"About",
    link:"/about"
  },
  {
    id:4,
    title:"Contact",
    link:"/contact"
  }
]

const Header = () => {
  return (
    <div className="shadow-xl flex flex-wrap items-center justify-center md:justify-between px-16 md:px-36 fixed z-50 w-full py-4 bg-white">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Horizon Haven" className="w-36" />
      </NavLink>
      <nav className="flex space-x-5">
        {
          links.map((link) => {
            return (

              <NavLink
              key={link.id}
              to={link.link}
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "500" : "",
                  color: isActive? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
        {link.title}
            </NavLink >
              
            )
          })
        }
       
      </nav>
      <div className="right flex items-center justify-center space-x-3">
        <div className="search">
          <input type="search" placeholder="search " className="w-full py-2 px-4 border border-spacing-1 focus:border-none focus:outline-none"/>
        </div>
        <div className="auth">
          <NavLink
            to="/sign-up"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "500" : "",
                // color: isPending ? "red" : "black",
                color: isActive? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
