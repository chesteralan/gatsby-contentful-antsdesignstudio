import React, { useEffect, useState } from "react";
import Email from "./Email";
import Phone from "./Phone";
import Socials from "./Socials";

type Props = {};

const TopBar = (props: Props) => {
  const [filled, setFilled] = useState(false);

  const ScrollEvent = () => {
    if (window.scrollY > 50) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      window.removeEventListener("scroll", ScrollEvent);
    };
  }, []);

  return (
    <div
      id="topbar"
      className={`d-none d-lg-flex align-items-center fixed-top ${
        filled ? "topbar-scrolled" : ""
      }`}
    >
      <div className="container d-flex">
        <div className="contact-info mr-auto">
          <Email />
          <Phone />
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default TopBar;
