import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { language, news } from "./language"

const Section = styled.section`
  padding: 30px 0;
`
const H3 = styled.h3`
  color: #243c84;
  font-size: 2.25rem;
  text-align: center;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1680px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 15px;
  }
`
const A = styled.a`
  box-sizing: border-box;
  display: block;
  padding: 0 15px;
  text-decoration: none;
  position: relative;
  max-width: 100%;
  margin-bottom: 30px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
`
const Article = styled(BackgroundImage)`
  border: 2px solid #243c84;
  width: 400px;
  height: 500px;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
const Col = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`
const Title = styled.h4`
  color: #243c84;;
  font-size: 1.62671rem;
  text-align: center;
`

const News = () => {
  const images = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "exporter-of-the-year.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "orange-county-hand-sanitizer.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "international-success.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "incredible-tony-adame.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      five: file(relativePath: { eq: "regular-dude-adame.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      six: file(relativePath: { eq: "city-council-honors-local-founder.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 540, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section>
      <H3>// {news.title[language]} //</H3>
      <Row>
        <A href="http://www.irvinechambereconomicdevelopment.com/news/p/item/27190/suavecito-named-greater-irvine-chamber-2020-exporter-of-the-year" target="_blank" rel="noopener">
          <Article fluid={images.one.childImageSharp.fluid}>
            <Col>
              <Title>{news.links[language][0]}</Title>
            </Col>
          </Article>
        </A>
        <A href="https://www.latimes.com/california/story/2020-04-13/suavecito-orange-county-hand-sanitizer-barrio-coronavirus" target="_blank" rel="noopener">
          <Article fluid={images.two.childImageSharp.fluid}>
            <Col>
              <Title>{news.links[language][1]}</Title>
            </Col>
          </Article>
        </A>
       <A href="https://eldonnews.org/style/2018/05/24/suavecito-pomade-reaches-international-brand-success/" target="_blank" rel="noopener">
          <Article fluid={images.three.childImageSharp.fluid}>
            <Col>
              <Title>{news.links[language][2]}</Title>
            </Col>
          </Article>
        </A>
        <A href="https://www.ocweekly.com/the-incredible-story-of-suavecito-pomades-se-ores-j-bird-and-pete-and-tony-adame-6483081/" target="_blank" rel="noopener">
          <Article fluid={images.four.childImageSharp.fluid}>
            <Col>
              <Title>{news.links[language][3]}</Title>
            </Col>
          </Article>
        </A>
        <A href="https://wearemitu.com/mitu-world/how-a-bunch-of-regular-dudes-made-suavecito-pomade-a-big-success/" target="_blank" rel="noopener">
          <Article fluid={images.five.childImageSharp.fluid}>
            <Col>
              <Title>{news.links[language][4]}</Title>
            </Col>
          </Article>
        </A>
        <A href="https://www.ocregister.com/2014/01/16/city-council-honors-suavecitos-local-founders/" target="_blank" rel="noopener">
          <Article fluid={images.six.childImageSharp.fluid}>
            <Col>
              <Title>{news.links[language][5]}</Title>
            </Col>
          </Article>
        </A>
      </Row>
    </Section>
  )
}

export default News