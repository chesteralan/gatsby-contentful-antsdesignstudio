import React from 'react'
import { useStaticQuery, graphql } from "gatsby";

type Props = {}

const SubTitle = (props: Props) => {

  const data = useStaticQuery(graphql`
    {
        subTitle: contentfulSettings(key: {eq: "HERO_SUBTITLE"}) {
          textValue
        }
    }
    `)

    const subTitle = data.subTitle.textValue

  return (
    <h2>{subTitle}</h2>
  )
}

export default SubTitle