import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
  font-family: "LEMONMILK", impact, Sans-Serif;
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
  a {
    margin-right: 5px;
  }
`
const ReadMore = styled(Link)`
  display: inline-block;
  font-family: "LEMONMILK", impact, Sans-Serif;
  font-weight: 700;
  font-style: italic;
  font-size: 0.6rem;
  margin-left: 5px;
  padding: 12px;
  position: relative;
  text-decoration: none;
  vertical-align: top;
  :after {
    z-index: -1;
		content: "";
		position: absolute;
		top: 0;
    left: 0;
		height: 100%;
		width: 100%;
		background-color: transparent;
    border: 3px solid #f1ca12;
		-webkit-transform: skewX(-10deg);
		-moz-transform: skewX(-10deg);
		-ms-transform: skewX(-10deg);
		transform: skewX(-10deg);
  }
  :hover:after {
    background-color: #f1ca12;
  }
`
const Issues = () => {
  const images = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "Tony_Campaign-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 680, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "Tony_Campaign-12.jpg" }) {
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
          <p>
            {issues.bullets[language][0]}
            <ReadMore href="/issues/youth-investment">READ MORE</ReadMore>
          </p>
          <p>
            {issues.bullets[language][1]}
            <ReadMore href="/tonys-vision">READ MORE</ReadMore>
          </p>
          <p>
            {issues.bullets[language][2]}
            <ReadMore href="/tonys-vision">READ MORE</ReadMore>
          </p>
        </BulletContainer>
      </Row>
      <Row>
        <BulletContainer className="left">
          <p>
            <ReadMore href="/tonys-vision#Housing">READ MORE</ReadMore>
            {issues.bullets[language][3]}
          </p>
          <p>
            <ReadMore href="/">READ MORE</ReadMore>
            {issues.bullets[language][4]}
          </p>
          <p>
            <ReadMore href="/">READ MORE</ReadMore>
            {issues.bullets[language][5]}
          </p>
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