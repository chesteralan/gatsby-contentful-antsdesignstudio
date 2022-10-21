import React, { useState } from "react";
import Categories from "./Categories";
import PortfolioItem from "./PortfolioItem";
import { useStaticQuery, graphql } from "gatsby";
import type { IGatsbyImageData } from "gatsby-plugin-image";

type Props = {};
export type Portfolio = {
  title: string;
  description: { description: string };
  category: { name: string };
  thumbnail: IGatsbyImageData;
  mainImage: IGatsbyImageData;
};
const Portfolio = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      portfolio: allContentfulPortfolio {
        nodes {
          title
          description {
            description
          }
          category {
            name
          }
          thumbnail: image {
            gatsbyImageData(width: 395, placeholder: TRACED_SVG)
          }
          mainImage: image {
            gatsbyImageData(width: 512, placeholder: TRACED_SVG)
          }
          priority
        }
      }
    }
  `);

  const [currentCategory, setCurrentCategory] = useState(null);

  const handleFilterCategory = (portfolio: Portfolio) => {
    if (currentCategory === null) return true;
    if (currentCategory === "") return true;
    return currentCategory === portfolio.category?.name;
  };

  const portfolio = data.portfolio.nodes
    .filter(handleFilterCategory)
    .sort((a: any, b: any) => b.priority - a.priority);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h3>
            Check our <span>Portfolio</span>
          </h3>
          <p></p>
        </div>

        <Categories filterByCategory={[currentCategory, setCurrentCategory]} />

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolio.map((item: Portfolio, index: number) => (
            <PortfolioItem key={index.toString()} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
