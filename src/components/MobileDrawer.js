import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { language, navigation_text } from "./language"

const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  font-family: "LEMONMILK", impact, Sans-Serif;
  justify-content: center;
  background: #243c84;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ drawerOpen }) =>
    drawerOpen ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 767px) {
    display: flex;
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 767px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

const MobileDrawer = ({ drawerOpen }) => {
  return (
    <StyledMenu drawerOpen={drawerOpen}>
      <Link to="/">{navigation_text.home[language]}</Link>
      <Link to="/tonys-story">{navigation_text.tonys_story[language]}</Link>
      <Link to="/about-ward-1">{navigation_text.about_ward_1[language]}</Link>
      <Link to="/tonys-vision">{navigation_text.tonys_vision[language]}</Link>
      <Link to="/get-involved">{navigation_text.get_involved[language]}</Link>
    </StyledMenu>
  )
}

export default MobileDrawer
