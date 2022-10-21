import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ServiceItem from "./ServiceItem";
import type { IGatsbyImageData } from "gatsby-plugin-image";

type Props = {};

export type Service = {
  name: string;
  description: string;
  featuredImage: IGatsbyImageData;
};

const Services = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      allServices: allContentfulService {
        nodes {
          name
          description
          featuredImage {
            gatsbyImageData(width: 64, placeholder: TRACED_SVG)
          }
          priority
        }
      }
    }
  `);

  const allServices = data.allServices.nodes.sort(
    (a: any, b: any) => b.priority - a.priority
  );

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <h3>
            Check My <span>Services</span> Offered
          </h3>
          <p></p>
        </div>

        <div className="row">
          {allServices.map((service: Service, index: number) => (
            <ServiceItem key={index.toString()} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
