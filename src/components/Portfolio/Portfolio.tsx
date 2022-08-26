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
  image: IGatsbyImageData;
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
          image {
            gatsbyImageData(width: 395, placeholder: TRACED_SVG)
          }
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

  const portfolio = data.portfolio.nodes.filter(handleFilterCategory);

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
