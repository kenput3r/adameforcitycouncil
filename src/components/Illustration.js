import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { language, illustration } from "./language"

const Section = styled.section`
  background-color: #243c84;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
  @media (max-width: 767px) {
    padding: 0;
  }
`
const Text = styled.div`
  color: #f1ca12;
  font-family: "LEMONMILK", impact, Sans-Serif;
  font-weight: 700;
  font-size: 1.62671rem;
  width: 680px;
  max-width: 100%;
  padding: 30px;
  @media (max-width: 767px) {
    padding: 15px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
  p {
    line-height: 1.2;
  }
`
const ImageContainer = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 30px;
  @media (max-width: 767px) {
    padding: 15px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
`

const Illustration = () => {
  const illustration_image = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Youth-Sports-Photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Text>
        <p>"{illustration.text[language]}"</p>
      </Text>
      <ImageContainer>
        <Img fluid={illustration_image.logo.childImageSharp.fluid} alt="A torn and tattered photograph of Tony Adame as a child" />
      </ImageContainer>
    </Section>
  )
}

export default Illustration