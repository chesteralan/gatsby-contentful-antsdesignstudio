import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  filterByCategory: any[];
};

const Categories = ({ filterByCategory }: Props) => {
  const data = useStaticQuery(graphql`
    {
      categories: allContentfulPortfolioCategory {
        nodes {
          name
          portfolio {
            id
          }
          priority
        }
      }
    }
  `);

  const [currentCategory, setCurrentCategory] = filterByCategory;
  const categories = data.categories.nodes;
  console.log(categories);
  const filteredCategories = categories
    .filter((c: any) => c.portfolio)
    .sort((a: any, b: any) => b.priority - a.priority);

  return (
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li onClick={() => setCurrentCategory(null)}>All</li>
          {filteredCategories.map((c: any, index: number) => (
            <li
              key={index.toString()}
              onClick={() => setCurrentCategory(c.name)}
              className={currentCategory === c.name ? `filter-active` : ``}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
