import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto d-none"><a href="#">Ants Design Studio<span>.</span></a></h1>
      
      <a href="#" className="logo mr-auto">
        <img src="https://2.bp.blogspot.com/-UmtxXW72VO8/Xwk8ulQDYTI/AAAAAAAAAsQ/lEerOODNqsoRR4FIYmBpSSzqjSXVgKm_QCLcBGAsYHQ/s1600/header_img.png" alt=""/></a>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          
        </ul>
      </nav>

    </div>
  </header>
  )
}

export default Header