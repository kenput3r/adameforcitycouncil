import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { language, issues } from "./language"

const Section = styled.section``
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  &:nth-of-type(2) {
    padding-top: 30px;
  }

  @media (max-width: 767px) {
    margin-bottom: 0;
    &:nth-of-type(2) {
      padding-top: 0;
    }
  }
`
const ImageContainer = styled.div`
  width: 40%;
  max-width: 100%;
  overflow: hidden;
  position: reltaive;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
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

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    width: 50%;
    padding: 30px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 15px;
  }

  @media (max-width: 767px) {
    width: 100%;
    a {
      float: right;
    }
  }

  @media (min-width: 768px) {
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
const Supplemental = styled.span`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
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
            <Img
              fluid={images.one.childImageSharp.fluid}
              alt="Tony Adame standing by the Suavecito Headquarters sign"
            />
          </div>
        </ImageContainer>
        <BulletContainer className="right">
          <p>
            {issues.bullets[language][0]}
            <ReadMore to="/issues/youth-investment">
              {issues.read_more[language]}
              <Supplemental>
                {" "}
                about Tony's position on Youth Investment"
              </Supplemental>
            </ReadMore>
          </p>
          <p>
            {issues.bullets[language][1]}
            <ReadMore to="/issues/public-safety">
              {issues.read_more[language]}
              <Supplemental>
                {" "}
                about Tony's position on Public Safety"
              </Supplemental>
            </ReadMore>
          </p>
          <p>
            {issues.bullets[language][2]}
            <ReadMore to="/issues/homelessness">
              {issues.read_more[language]}
              <Supplemental>
                {" "}
                about Tony's position on Homelessness"
              </Supplemental>
            </ReadMore>
          </p>
        </BulletContainer>
      </Row>
      <Row>
        <BulletContainer className="left">
          <p>
            <ReadMore to="/issues/housing">
              {issues.read_more[language]}
              <Supplemental> about Tony's position on Housing"</Supplemental>
            </ReadMore>
            {issues.bullets[language][3]}
          </p>
          <p>
            <ReadMore to="/issues/immigration">
              {issues.read_more[language]}
              <Supplemental>
                {" "}
                about Tony's position on Immigration"
              </Supplemental>
            </ReadMore>
            {issues.bullets[language][4]}
          </p>
          <p>
            <ReadMore to="/issues/small-business">
              {issues.read_more[language]}
              <Supplemental>
                {" "}
                about Tony's position on Small Businesses"
              </Supplemental>
            </ReadMore>
            {issues.bullets[language][5]}
          </p>
        </BulletContainer>
        <ImageContainer className="right">
          <div className="shape">
            <Img
              fluid={images.two.childImageSharp.fluid}
              alt="Tony Adame standing by a mural reading 'Santa Ana'"
            />
          </div>
        </ImageContainer>
      </Row>
    </Section>
  )
}

export default Issues
