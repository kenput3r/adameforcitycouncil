import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  let styles = {
    maxWidth: 300,
    height: "auto"
  }
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.logo.childImageSharp.fluid} {...styles} alt={`Text reading: Tony "Suavecito" Adame for Santa Ana City Council`} />
}

export default Logo