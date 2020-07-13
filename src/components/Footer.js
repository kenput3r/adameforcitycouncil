import React from "react"
import styled from "styled-components"
import { language, footer } from "./language"

const Container = styled.footer`
  background-color: #f1ca12;
  color: #fff;
  font-family: "LEMONMILK";
  font-weight: 700;
  font-size: 1.62671rem;
  line-height: 1.2;
  padding: 30px;
  text-align: center;
`
const Footer = () => {
  return (
    <Container>
      {footer.disclaimer[language]}
    </Container>
  )
}

export default Footer