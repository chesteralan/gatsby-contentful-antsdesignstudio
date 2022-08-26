import React from "react";
import type { Service } from "./FeaturedServices";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  service: Service;
};

const ServiceItem = ({ service }: Props) => {
  const {
    name,
    featuredImage,
    longDescription: { longDescription: description },
  } = service;

  const image = getImage(featuredImage) as IGatsbyImageData;

  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon">
          <GatsbyImage image={image} alt="service image" />
        </div>
        <h4 className="title">
          <a href="">{name}</a>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
