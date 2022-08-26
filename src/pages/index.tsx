import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/TopBar/TopBar";
import FeaturedServices from "../components/FeaturedServices/FeaturedServices";
import Testimonials from "../components/Testimonials/Testimonials";

type Props = {
  data: any;
};

const IndexPage = (props: Props) => {
  const { data } = props;

  const topBarSection = data?.topBarSection?.booleanValue || true;
  const headerSection = data?.headerSection?.booleanValue || true;
  const heroSection = data?.heroSection?.booleanValue || true;
  const featuredServicesSection =
    data?.featuredServicesSection?.booleanValue || true;
  const aboutSection = data?.aboutSection?.booleanValue || true;
  const servicesSection = data?.servicesSection?.booleanValue || true;
  const testimonialsSection = data?.testimonialsSection?.booleanValue || true;
  const portfolioSection = data?.portfolioSection?.booleanValue || true;
  const footerSection = data?.footerSection?.booleanValue || true;

  return (
    <>
      {topBarSection && <TopBar />}
      {headerSection && <Header hasTopBar={topBarSection} />}
      {heroSection && <Hero />}
      {featuredServicesSection && <FeaturedServices />}
      {aboutSection && <About />}
      {servicesSection && <Services />}
      {testimonialsSection && <Testimonials />}
      {portfolioSection && <Portfolio />}
      {footerSection && <Footer />}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ants Designs Studio</title>;

export const query = graphql`
  query PageSections {
    topBarSection: contentfulSettings(key: { eq: "SECTION_TOPBAR" }) {
      booleanValue
    }
    headerSection: contentfulSettings(key: { eq: "SECTION_HEADER" }) {
      booleanValue
    }
    heroSection: contentfulSettings(key: { eq: "SECTION_HERO" }) {
      booleanValue
    }
    featuredServicesSection: contentfulSettings(
      key: { eq: "SECTION_FEATURED_SERVICES" }
    ) {
      booleanValue
    }
    aboutSection: contentfulSettings(key: { eq: "SECTION_ABOUT" }) {
      booleanValue
    }
    servicesSection: contentfulSettings(key: { eq: "SECTION_SERVICES" }) {
      booleanValue
    }
    testimonialsSection: contentfulSettings(
      key: { eq: "SECTION_TESTIMONIALS" }
    ) {
      booleanValue
    }
    portfolioSection: contentfulSettings(key: { eq: "SECTION_PORTFOLIO" }) {
      booleanValue
    }
    footerSection: contentfulSettings(key: { eq: "SECTION_FOOTER" }) {
      booleanValue
    }
  }
`;
