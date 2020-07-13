import React from "react"
import styled from "styled-components"
import { language, quote } from "./language"

const Section = styled.section`
  color: #243c84;
  font-family: "LEMONMILK", impact, Sans-Serif;
  font-weight: 700;
  font-size: 1.62671rem;
  line-height: 1.2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px;
`
const Container = styled.div`
  width: 720px;
  max-width: 100%;
`
const Quote = () => {
  return (
    <Section>
      <Container>
        <p>"{quote.text[language]}"</p>
        <p style={{textAlign:`right`}}>// Tony Adame</p>
      </Container>
    </Section>
  )
}

export default Quote