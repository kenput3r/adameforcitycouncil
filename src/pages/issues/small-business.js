import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { language, small_business } from "../../components/language"

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
      small_business_image_1: file(relativePath: { eq: "Tony_Campaign-14.jpg" }) {
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
      <SEO title={small_business.title[language]} />
      <Container>
        <H1>{small_business.title[language]}</H1>
        <p><Img fluid={data.small_business_image_1.childImageSharp.fluid} alt="Tony Adame standing in front of the Suavecito building" /></p>
        <p>{small_business.paragraphs[language][0]}</p>
        <p>{small_business.paragraphs[language][1]}</p>
        <p>{small_business.paragraphs[language][2]}</p>
        <p>{small_business.paragraphs[language][3]}</p>
      </Container>
    </Layout>
  )
} 

export default Page