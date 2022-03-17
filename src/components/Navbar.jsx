import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// const links = [
//   {
//     title: "Home",
//     link: "/",
//     id: "header-link-home",
//   },

//   {
//     title: "About",
//     link: "/about",
//     id: "header-link-about",
//   },

//   {
//     title: "Movies",
//     link: "/movies",
//     id: "header-link-movies",
//   },
// ];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div
      className="navbar"
      style={{ backgroundColor: "cyan", height: "60px", width: "100%" }}
    >
      <Link to="/" className="navbartxt">
        Home
      </Link>
      <Link to="/about" className="navbartxt">
        About
      </Link>
      <Link to="/movies" className="navbartxt">
        Movies
      </Link>
    </div>
  );
};
