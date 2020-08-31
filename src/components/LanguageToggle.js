import React from "react"
import styled from "styled-components"
import { language } from "./language"

const label = language === "english" ? "Español" : "English"

const Container = styled.div`
  background-color: #f1c80f;
  border: 1px solid rgb(34, 66, 137);
  border-radius: 0 0 3px 3px;
  color: rgb(34, 66, 137);
  position: fixed;
  top: 50vh;
  transform: rotate(-90deg);
  margin-left: -25px;
  left: 0;
  padding: 10px;
  z-index: 100;

  @media (max-width: 767px) {
    top: 80vh;
    left: auto;
    right: 0;
    transform: rotate(90deg);
    margin-left: initial;
    margin-right: -20px;
  }
  a {
    color: rgb(34, 66, 137);
    text-decoration: none;
  }
`

const LanguageToggle = ({ location }) => {
  const site =
    language === "english"
      ? "https://es.tonyadame.com"
      : "https://www.tonyadame.com"
  return (
    <Container>
      <a href={site + location}>{label}</a>
    </Container>
  )
}

export default LanguageToggle
