import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import Nav from './Nav';


type Props = {
  hasTopBar: boolean;
}

const Header = (props: Props) => {
  const { hasTopBar = true } = props;
	const [filled, setFilled] = useState(false);

	const ScrollEvent = () => {
		if (window.scrollY > 50) {
			setFilled(true);
		  } else {
			setFilled(false);
		  }
	}

	useEffect(() => {
		window.addEventListener("scroll", ScrollEvent);
		return () => {
			window.removeEventListener("scroll", ScrollEvent);
		};
	},[])

  return (
    <header id="header" className={`fixed-top ${filled ? 'header-scrolled' : ''} ${!hasTopBar ? 'no-top-bar' : ''}`}>
    <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto d-none"><a href="#">Ants Design Studio<span>.</span></a></h1>
      
      <Logo />

      <Nav />

    </div>
  </header>
  )
}

export default Header