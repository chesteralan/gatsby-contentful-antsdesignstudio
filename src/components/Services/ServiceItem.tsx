import React from "react";
import type { Service } from "./Services";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  service: Service;
};

const ServiceItem = ({ service }: Props) => {
  const { name, description, featuredImage } = service;

  const image = getImage(featuredImage) as IGatsbyImageData;

  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center mb-5">
      <div className="icon-box">
        <div className="icon">
          <GatsbyImage image={image} alt="service image" />
        </div>
        <h4>
          <a>{name}</a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
