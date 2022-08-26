import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import HireMeButton from "./HireMeButton";
import Model from "./Model";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Video from "./Video";

type Props = {};

const Hero = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      bg: contentfulSettings(key: { eq: "HERO_BACKGROUND_IMAGE" }) {
        imageValue {
          url
        }
      }
    }
  `);

  const bgUrl = data.bg.imageValue.url;

  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <div className="col-md-8">
          <Title />
          <SubTitle />
          <div className="d-flex">
            <HireMeButton />
            <Video />
          </div>
        </div>
      </div>

      <Model />
    </section>
  );
};

export default Hero;
