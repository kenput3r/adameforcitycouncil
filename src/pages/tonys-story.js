import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { language, story } from "../components/language"

const Container = styled.div`
  border-top: 4px solid #243c84;
  margin-top: ${props => props.headerHeight}px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 30px 5px;
  @media (max-width: 767px) {
    border-top: 0;
  }
`
const H1 = styled.h1`
  color: #243c84;
`

const Page = () => {
  const [headerHeight, setHeaderHeight] = useState(208)
  useEffect(() => {
    const header = document.querySelector('header')
    setHeaderHeight(header.offsetHeight)
  })
  const data = useStaticQuery(graphql`
    query {
      image_1: file(relativePath: { eq: "5X0A5197.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_2: file(relativePath: { eq: "Santa-Anita-Photos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_3: file(relativePath: { eq: "Archtecture-Photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_4: file(relativePath: { eq: "Tony_Campaign-14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_5: file(relativePath: { eq: "5X0A9355.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_6: file(relativePath: { eq: "5X0A8659.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Tony's Story" />
      <Container headerHeight={headerHeight}>
        <H1>{story.title[language]}</H1>
        <p>{story.paragraphs[language][0]}</p>
        <p><Img fluid={data.image_1.childImageSharp.fluid} alt="Tony Adame at a park in Santa Ana" /></p>
        <p>{story.paragraphs[language][1]}</p>
        <p>{story.paragraphs[language][2]}</p>
        <p><Img fluid={data.image_2.childImageSharp.fluid} alt="Cut out photos from Tony's childhood" /></p>
        <p>{story.paragraphs[language][3]}</p>
        <p><Img fluid={data.image_3.childImageSharp.fluid} alt="A photograph of Tony in a class room as a child" /></p>
        <p>{story.paragraphs[language][4]}</p>
        <p><Img fluid={data.image_4.childImageSharp.fluid} alt="Tony standing in front of the Suavecito building" /></p>
        <p>{story.paragraphs[language][5]}</p>
        <p>{story.paragraphs[language][6]}</p>
        <p><Img fluid={data.image_5.childImageSharp.fluid} alt="Tony handing out Christmas gifts from the Suavecito Metro Van" /></p>
        <p><Img fluid={data.image_6.childImageSharp.fluid} alt="Tony and other volunteers of the Suavecito Toy Drive" /></p>

      </Container>
    </Layout>
  )
} 

export default Page