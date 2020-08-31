import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  height: calc(100vh - ${props => props.offset}px);
  max-height: calc(100vh - ${props => props.offset}px);
`
const StyledBackground = styled(BackgroundImage)`
  box-sizing: border-box;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`
const Inner = styled.div`
  color: #243c84;
  padding: 5px;
  span {
    background-color: rgba(241, 202, 18, 0.8);
  }
`
const NotFoundPage = () => {
  const [headerHeight, setHeaderHeight] = useState(208)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const footer = document.querySelector("footer")
    setOffset(footer.offsetHeight)
  })
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "5X0A9355.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout location="/">
      <SEO title="404: Not found" />
      <Container offset={offset}>
        <StyledBackground fluid={data.image.childImageSharp.fluid}>
          <Inner>
            <h1>
              <span>404</span>
            </h1>
            <h2>
              <span>Not Found</span>
            </h2>
            <p>
              <span>
                You just hit a route that doesn&#39;t exist... the sadness.
              </span>
            </p>
          </Inner>
        </StyledBackground>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
