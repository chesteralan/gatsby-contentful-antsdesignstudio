import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

const Model = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      heroModel: contentfulSettings(key: { eq: "HERO_BOY_IMAGE" }) {
        imageValue {
          gatsbyImageData(height: 520, placeholder: TRACED_SVG, formats: WEBP)
        }
      }
    }
  `);

  const image = getImage(data.heroModel.imageValue) as IGatsbyImageData;

  return (
    <div id="hero-models" data-aos="fade-left" data-aos-delay="800">
      <GatsbyImage image={image} alt="header logo" />
    </div>
  );
};

export default Model;
