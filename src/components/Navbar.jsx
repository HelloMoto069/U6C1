import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div className="navbar">
      {links.map((item,i)=>{return <Link to={`${item.link}`} key={i} className="navbaritem">{item.title}</Link>})}
    </div>
  )
    //map through the link ad display it in header
  
};
