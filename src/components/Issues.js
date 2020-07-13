import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { language, issues } from "./language"

const Section = styled.section`

`
const H2 = styled.h2`
  color: #243c84;
  font-size: 2.25rem;
  text-align: center;
  padding: 60px 0;
  margin-bottom: 0;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  &:nth-of-type(2) {
    padding-top: 30px;
  }
`
const ImageContainer = styled.div`
  width: 40%;
  max-width: 100%;
  overflow: hidden;
  position: reltaive;
  &.left {
    .shape {
      transform-origin: top;
      -webkit-transform: skewX(-5deg);
      -moz-transform: skewX(-5deg);
      -ms-transform: skewX(-5deg);
      transform: skewX(-5deg);
      position: relative;
  
    }
    img {
      margin-left: 30px;
      -webkit-transform: skewX(5deg);
      -moz-transform: skewX(5deg);
      -ms-transform: skewX(5deg);
      transform: skewX(5deg);
    }
  }
  &.right {
    .shape {
      transform-origin: bottom;
      -webkit-transform: skewX(-5deg);
      -moz-transform: skewX(-5deg);
      -ms-transform: skewX(-5deg);
      transform: skewX(-5deg);
      position: relative;
  
    }
    img {
      margin-left: -30px;
      -webkit-transform: skewX(5deg);
      -moz-transform: skewX(5deg);
      -ms-transform: skewX(5deg);
      transform: skewX(5deg);
    }
  }
`
const BulletContainer = styled.div`
  color: #243c84;
  font-family: "LEMONMILK";
  font-size: 1.62671rem;
  font-weight: 700;
  width: 40%;
  max-width: 100%;
  padding: 60px;
  &.right {
    p:nth-of-type(1) {
      padding-left: 30px;
    }
    p:nth-of-type(2) {
      padding-left: 15px;
    }
  }
  &.left {
    p:nth-of-type(1) {
      text-align: right;
    }
    p:nth-of-type(2) {
      padding-right: 15px;
      text-align: right;
    }
    p:nth-of-type(3) {
      padding-right: 30px;
      text-align: right;
    }
  }
  p {
    line-height: 1.2;
  }
`
const Issues = () => {
  const images = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "placeholder-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "placeholder-image.png" }) {
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
      <H2>// {issues.title[language]} //</H2>
      <Row>
        <ImageContainer className="left">
          <div className="shape">
            <Img fluid={images.one.childImageSharp.fluid} />
          </div>
        </ImageContainer>
        <BulletContainer className="right">
          <p>{issues.bullets[language][0]}</p>
          <p>{issues.bullets[language][1]}</p>
          <p>{issues.bullets[language][2]}</p>
        </BulletContainer>
      </Row>
      <Row>
        <BulletContainer className="left">
          <p>{issues.bullets[language][3]}</p>
          <p>{issues.bullets[language][4]}</p>
          <p>{issues.bullets[language][5]}</p>
        </BulletContainer>
        <ImageContainer className="right">
          <div className="shape">
            <Img fluid={images.two.childImageSharp.fluid} />
          </div>
        </ImageContainer>
      </Row>
    </Section>
  )
}

export default Issues