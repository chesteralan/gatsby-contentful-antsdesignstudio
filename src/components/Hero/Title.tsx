import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type Props = {}

const Title = (props: Props) => {

  const data = useStaticQuery(graphql`
    {
        title: contentfulSettings(key: {eq: "HERO_TITLE"}) {
          htmlValue {
            raw
          }
        }
    }
    `)

    const title = data.title.htmlValue.raw

  return (
    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(JSON.parse(title)) }} />
  )
}

export default Title