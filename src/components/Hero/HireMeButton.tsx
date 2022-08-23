import React from 'react'
import { useStaticQuery, graphql } from "gatsby";

type Props = {}

const HireMeButton = (props: Props) => {

  const data = useStaticQuery(graphql`
    {
        hiremeLink: contentfulSettings(key: {eq: "HERO_HIREME_LINK"}) {
          textValue
        }
    }
    `)

    const hiremeLink = data.hiremeLink.textValue

  return (
    <a target="_blank" rel="noopener noreferrer" href={hiremeLink} className="btn-get-started scrollto">Hire Me</a>
  )
}

export default HireMeButton