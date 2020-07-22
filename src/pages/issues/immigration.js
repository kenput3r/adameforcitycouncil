import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { language, immigration } from "../../components/language"

const Container = styled.div`
  margin-top: 208px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
`
const H1 = styled.h1`
  border-top: 4px solid #243c84;
  color: #243c84;
  font-size: 2.25rem;
  padding-top: 30px;
`

const Page = () => {
  const data = useStaticQuery(graphql`
    query {
      immigration_image_1: file(relativePath: { eq: "Tony_Campaign-1.jpg" }) {
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
      <SEO title={immigration.title[language]} />
      <Container>
        <H1>{immigration.title[language]}</H1>
        <p><Img fluid={data.immigration_image_1.childImageSharp.fluid} alt="Tony Adame standing by a mural reading 'Community'" /></p>
        <p>{immigration.paragraphs[language][0]}</p>
        <p>{immigration.paragraphs[language][1]}</p>
        <p>{immigration.paragraphs[language][2]}</p>
      </Container>
    </Layout>
  )
} 

export default Page