import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  language,
  youth_investment,
  public_safety,
  homelessness,
  housing,
  immigration,
  small_business,
} from "../components/language"

const Container = styled.div`
  margin-top: ${props => props.headerHeight}px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 0 5px 30px 5px;
`
const H2 = styled.h2`
  border-top: 4px solid #243c84;
  color: #243c84;
  font-size: 2.25rem;
  padding-top: 30px;
  @media (max-width: 767px) {
    &.first {
      border-top: 0;
    }
  }
`

const Page = () => {
  const [headerHeight, setHeaderHeight] = useState(208)
  useEffect(() => {
    const header = document.querySelector("header")
    setHeaderHeight(header.offsetHeight)
  })
  const data = useStaticQuery(graphql`
    query {
      youth_image_1: file(relativePath: { eq: "Tony_Campaign-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youth_image_2: file(relativePath: { eq: "Santa-Anita-Photos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      public_safety_image_1: file(relativePath: { eq: "Tony_Campaign-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homelessness_image_1: file(relativePath: { eq: "Tony_Campaign-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      housing_image_1: file(relativePath: { eq: "Tony_Campaign-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      immigration_image_1: file(relativePath: { eq: "Tony_Campaign-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      small_business_image_1: file(
        relativePath: { eq: "Tony_Campaign-14.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout page={"tonys vision"} location="/tonys-vision">
      <SEO title="Tony's Vision" />
      <Container headerHeight={headerHeight}>
        <div id="YouthInvestment">
          <H2 className="first">{youth_investment.title[language]}</H2>
          <p>
            <Img
              fluid={data.youth_image_1.childImageSharp.fluid}
              alt="Tony Adame at a park in Santa Ana"
            />
          </p>
          <p>{youth_investment.paragraphs[language][0]}</p>
          <p>
            <Img
              fluid={data.youth_image_2.childImageSharp.fluid}
              alt="Cut out photographs of Tony Adame as a child"
            />
          </p>
          <p>{youth_investment.paragraphs[language][1]}</p>
          <p>{youth_investment.paragraphs[language][2]}</p>
          <p>{youth_investment.paragraphs[language][3]}</p>
        </div>
        <div id="PublicSafety">
          <H2>{public_safety.title[language]}</H2>
          <p>
            <Img
              fluid={data.public_safety_image_1.childImageSharp.fluid}
              alt="Tony Adame at a park in Santa Ana"
            />
          </p>
          <p>{public_safety.paragraphs[language][0]}</p>
          <p>{public_safety.paragraphs[language][1]}</p>
          <p>{public_safety.paragraphs[language][2]}</p>
        </div>
        <div id="Homelessness">
          <H2>{homelessness.title[language]}</H2>
          <p>
            <Img
              fluid={data.homelessness_image_1.childImageSharp.fluid}
              alt="Tony Adame at a park in Santa Ana"
            />
          </p>
          <p>{homelessness.paragraphs[language][0]}</p>
          <p>{homelessness.paragraphs[language][1]}</p>
          <p>{homelessness.paragraphs[language][2]}</p>
        </div>
        <div id="Housing">
          <H2>{housing.title[language]}</H2>
          <p>
            <Img
              fluid={data.housing_image_1.childImageSharp.fluid}
              alt="Tony Adame at City Hall"
            />
          </p>
          <p>{housing.paragraphs[language][0]}</p>
          <p>{housing.paragraphs[language][1]}</p>
          <p>{housing.paragraphs[language][2]}</p>
          <p>{housing.paragraphs[language][3]}</p>
          <p>{housing.paragraphs[language][4]}</p>
        </div>
        <div id="Immigration">
          <H2>{immigration.title[language]}</H2>
          <p>
            <Img
              fluid={data.immigration_image_1.childImageSharp.fluid}
              alt="Tony Adame standing by a mural reading 'Community'"
            />
          </p>
          <p>{immigration.paragraphs[language][0]}</p>
          <p>{immigration.paragraphs[language][1]}</p>
          <p>{immigration.paragraphs[language][2]}</p>
        </div>
        <div id="SmallBusiness">
          <H2>{small_business.title[language]}</H2>
          <p>
            <Img
              fluid={data.small_business_image_1.childImageSharp.fluid}
              alt="Tony Adame standing in front of the Suavecito building"
            />
          </p>
          <p>{small_business.paragraphs[language][0]}</p>
          <p>{small_business.paragraphs[language][1]}</p>
          <p>{small_business.paragraphs[language][2]}</p>
          <p>{small_business.paragraphs[language][3]}</p>
        </div>
      </Container>
    </Layout>
  )
}

export default Page
