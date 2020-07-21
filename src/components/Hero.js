import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { language, hero_text } from "./language"

const Section = styled(BackgroundImage)`
  box-sizing: border-box;
  color: #243c84;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  padding: 15px;
`
const H2 = styled.h2`
  @media (min-width: 992px) {
    margin-left: 60px;
  }
`
const Tagline = styled.div`
  font-family: "LEMONMILK", impact, Sans-Serif;
  font-weight: 700;
  width: 425px;
  max-width: 100%;
  @media (min-width: 992px) {
    margin-left: 60px;
  }
`

const Hero = () => {
  const hero_image = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Tony_Campaign-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section tag="section" fluid={hero_image.logo.childImageSharp.fluid}>
      <H2>{hero_text.title[language]}</H2>
      <Tagline>
        <p>{hero_text.tag_line[language]}</p>
      </Tagline>
    </Section>
  )
}

export default Hero