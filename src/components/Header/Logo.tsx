import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

const Logo = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      headerLogo: contentfulSettings(key: { eq: "HEADER_LOGO" }) {
        imageValue {
          gatsbyImageData(height: 80, placeholder: TRACED_SVG)
        }
      }
    }
  `);

  const image = getImage(data.headerLogo.imageValue) as IGatsbyImageData;

  return (
    <a className="logo mr-auto">
      <GatsbyImage image={image} alt="header logo" />
    </a>
  );
};

export default Logo;
