import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import ServiceItem from './ServiceItem';
import type { IGatsbyImageData } from "gatsby-plugin-image"

type Props = {}

export type Service = {
  name: string;
  longDescription: { longDescription: string };
  featuredImage: IGatsbyImageData;
}

const FeaturedServices = (props: Props) => {

  const data = useStaticQuery(graphql`
  {
    featuredServices: allContentfulService(filter: {isFeatured: {eq: true}}) {
      nodes {
        featuredImage {
          gatsbyImageData(width: 80, placeholder: TRACED_SVG)
        }
        longDescription {
          longDescription
        }
        name
      }
    }
  }
  
    `)

    const featuredServices = data.featuredServices.nodes

  return (
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">

        <div className="row">

          {featuredServices.map((service:Service, index:number) => <ServiceItem key={index.toString()} service={service} />)}

        </div>

      </div>
    </section>
  )
}

export default FeaturedServices