import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { language, ward_1 } from "../components/language"

const Container = styled.div`
  border-top: 4px solid #243c84;
  margin-top: 208px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding-top: 30px;
`
const H1 = styled.h1`
  color: #243c84;
`


const Page = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "2020_ward_map.png" }) {
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
      <SEO title="About Ward 1" />
      <Container>
        <H1>{ward_1.title[language]}</H1>
        <p>{ward_1.paragraphs[language][0]}</p>
        <p>{ward_1.paragraphs[language][1]}</p>
        <Img fluid={data.map.childImageSharp.fluid} alt="A map of ward 1" />
      </Container>
    </Layout>
  )
} 

export default Page