import React from 'react'
import type { Portfolio } from './Portfolio';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
type Props = {
    item: Portfolio;
}

const PortfolioItem = ({ item }: Props) => {
    const { 
        title,
        image,
        category,
    } = item;

    const imageData = getImage(image) as IGatsbyImageData;

  return (
    <div className="col-lg-3 col-md-4 portfolio-item filter-ads filter-selected">
            <GatsbyImage image={imageData} alt={title} />
            <div className="portfolio-info">
              <h4>{ title }</h4>
              <p>{category.name}</p>
            </div>
          </div>
  )
}

export default PortfolioItem