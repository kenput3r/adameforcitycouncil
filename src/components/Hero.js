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
  span {
    background-color: rgba(241, 202, 18, 0.8);
    padding: 5px 5px;
    ::selection {
      background-color: #243c84;
      color: #fff;
    }
    ::-moz-selection {
      background-color: #243c84;
      color: #fff;
    }
  }
`
const H2 = styled.h2`
  font-size: 2rem;
  @media (min-width: 992px) {
    margin-left: 60px;
  }
`
const Tagline = styled.div`
  font-family: "LEMONMILK", impact, Sans-Serif;
  font-weight: 700;
  font-size: 1.25rem;
  width: 525px;
  max-width: 100%;
  @media (min-width: 992px) {
    margin-left: 60px;
  }
  span {
    line-height: 1.75;
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
      <H2><span>{hero_text.title[language]}</span></H2>
      <Tagline>
        <p>
          <span>{hero_text.tag_line[language][0]}</span><br />
          <span>{hero_text.tag_line[language][1]}</span>
        </p>
      </Tagline>
    </Section>
  )
}

export default Hero