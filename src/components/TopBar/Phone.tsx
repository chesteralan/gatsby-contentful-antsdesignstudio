import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

type Props = {}

const Phone = (props: Props) => {
    const data = useStaticQuery(graphql`
    {
        phone: contentfulSettings(key: {eq: "TOPBAR_PHONE"}) {
          textValue
        }
      }      
    `)

    const phone = data.phone.textValue;

  return (
    <>
    <i className="icofont-envelope"></i> <a href={`mailto:${phone}`}>{phone}</a>
    </>
  )
}

export default Phone