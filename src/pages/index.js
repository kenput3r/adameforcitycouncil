import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Quote from "../components/Quote"
import Illustration from "../components/Illustration"
import Issues from "../components/Issues"
import News from "../components/News"

const IndexPage = () => (
  <Layout page={"home"} location="/">
    <SEO title="Tony Adame" />
    <Hero />
    <Quote />
    <Illustration />
    <Issues />
    <News />
  </Layout>
)

export default IndexPage
