import React, { useEffect, useState } from "react";

type Props = {
  id: string;
  children: any;
};

const NavLink = ({ id, children }: Props) => {
  const [active, setActive] = useState(false);

  const ScrollEvent = () => {
    const element = document.getElementById(id) as HTMLElement;
    if (
      window.scrollY >= element.offsetTop - 50 &&
      window.scrollY <= element.offsetTop + element.offsetHeight - 50
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      window.removeEventListener("scroll", ScrollEvent);
    };
  }, []);

  return (
    <li className={active ? `active` : ``}>
      <a href={`#${id}`}>{children}</a>
    </li>
  );
};

export default NavLink;
