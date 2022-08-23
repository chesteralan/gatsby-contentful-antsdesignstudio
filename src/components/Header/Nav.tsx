import React from "react";
import NavLink from "./NavLink";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <NavLink id="hero">Home</NavLink>
        <NavLink id="about">About</NavLink>
        <NavLink id="services">Services</NavLink>
        <NavLink id="testimonials">Testimonials</NavLink>
        <NavLink id="portfolio">Portfolio</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
