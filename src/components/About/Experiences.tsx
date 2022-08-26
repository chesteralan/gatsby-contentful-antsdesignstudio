import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

const Experiences = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      experiences: contentfulSettings(key: { eq: "ABOUT_EXPERIENCE" }) {
        listValue
      }
    }
  `);

  const experiences = data.experiences.listValue;

  return (
    <p>
      <ul className="list-group list-group-flush">
        {experiences.map((exp: string, index: number) => (
          <li key={index.toString()} className="list-group-item">
            <i className="ion ion-arrow-right-b"></i>
            {exp}
          </li>
        ))}
      </ul>
    </p>
  );
};

export default Experiences;
