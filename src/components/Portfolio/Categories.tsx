import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

type Props = {}

const Categories = (props: Props) => {

    const data = useStaticQuery(graphql`
    {
        categories: allContentfulPortfolioCategory {
          nodes {
            name
            portfolio {
              id
            }
          }
        }
      }
      
  `);

  const categories = data.categories.nodes;
  const filteredCategories = categories.filter((c:any) => c.portfolio)
  
  return (
    <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li>All</li>
              {filteredCategories.map((c:any) => <li>{c.name}</li>)}
            </ul>
          </div>
        </div>
  )
}

export default Categories