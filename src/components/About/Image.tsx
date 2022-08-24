import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

type Props = {}

const Image = (props: Props) => {

    const data = useStaticQuery(graphql`
    {
        heroModel: contentfulSettings(key: {eq: "ABOUT_IMAGE"}) {
          imageValue {
            gatsbyImageData(width: 540, placeholder: TRACED_SVG, formats: WEBP)
          }
        }
    }
    `)

    const image = getImage(data.heroModel.imageValue) as IGatsbyImageData;

  return (
        <GatsbyImage image={image} alt="about image" className="img-fluid" />
  )
}

export default Image