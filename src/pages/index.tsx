import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Portfolio from "../components/Portfolio/Portfolio"
import Footer from "../components/Footer/Footer"
import TopBar from "../components/TopBar/TopBar"
import FeaturedServices from "../components/FeaturedServices/FeaturedServices"
import Testimonials from "../components/Testimonials/Testimonials"



const IndexPage = () => {
  return (
    <>
    <TopBar />
    <Header />
    <Hero />
    <FeaturedServices />
    <About />
    <Services />
    <Testimonials />
    <Portfolio />
    <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ants Designs Studio</title>
