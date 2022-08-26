import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

const Email = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      email: contentfulSettings(key: { eq: "TOPBAR_EMAIL" }) {
        textValue
      }
    }
  `);

  const email = data.email.textValue;

  return (
    <>
      <i className="icofont-envelope"></i>{" "}
      <a href={`mailto:${email}`}>{email}</a>
    </>
  );
};

export default Email;
