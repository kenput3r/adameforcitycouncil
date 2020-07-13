import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Quote from "../components/Quote"
import Illustration from "../components/Illustration"
import Issues from "../components/Issues"
import News from "../components/News"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Quote />
    <Illustration />
    <Issues />
    <News />
  </Layout>
)

export default IndexPage
