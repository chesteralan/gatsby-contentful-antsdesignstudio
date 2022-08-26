import React, { useState } from "react";
import type { Portfolio } from "./Portfolio";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import PortfolioModal from "./PortfolioModal";

type Props = {
  item: Portfolio;
};

const PortfolioItem = ({ item }: Props) => {
  const { title, thumbnail, category } = item;

  const [active, setActive] = useState(false);
  const imageData = getImage(thumbnail) as IGatsbyImageData;

  return (
    <>
      <div
        className="col-lg-4 col-md-6 portfolio-item filter-ads filter-selected"
        onClick={() => setActive(true)}
      >
        {imageData && <GatsbyImage image={imageData} alt={title} />}
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{category?.name}</p>
        </div>
      </div>
      {active && <PortfolioModal item={item} close={() => setActive(false)} />}
    </>
  );
};

export default PortfolioItem;
