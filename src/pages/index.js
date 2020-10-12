import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Quote from "../components/Quote"
import Illustration from "../components/Illustration"
import Issues from "../components/Issues"
import SectionTitle from "../components/SectionTitle"
import Video from "../components/Video"
import News from "../components/News"

const IndexPage = () => (
  <Layout page={"home"} location="/">
    <SEO title="Tony Adame" />
    <Hero />
    <Quote />
    <Illustration />
    <Issues />
    <SectionTitle title="// Historia De Tony //" />
    <Video
      src="https://www.youtube.com/embed/05TYOrZoFCg"
      title="Tony's Story"
    />
    <News />
  </Layout>
)

export default IndexPage
