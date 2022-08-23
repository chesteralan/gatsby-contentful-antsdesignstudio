import React from 'react'
import { useStaticQuery, graphql } from "gatsby";

type Props = {}

const Title = (props: Props) => {

  const data = useStaticQuery(graphql`
    {
        title: contentfulSettings(key: {eq: "ABOUT_TITLE"}) {
          textValue
        }
    }
    `)

    const title = data.title.textValue

  return (
    <h3>{title}</h3>
  )
}

export default Title