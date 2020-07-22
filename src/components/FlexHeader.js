import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/logo-400px.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import MobileHeader from "./MobileHeader"
import MobileDrawer from "./MobileDrawer"
import { language, site, navigation_text } from "./language"

const DesktopHeader = styled.div`
  color: #243c84;
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-between;
  font-family: "LEMONMILK", impact, Sans-Serif;
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  position: relative;
  width: 100%;
  z-index: 2;

  @media (max-width: 767px) {
    display: none;
  }
`
const LogoContainer = styled.div`
  display: flex;
  flex-dirction: column;
  a {
    display: block;
  }
  img {
    margin-bottom: 0;
  }
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`
const DesktopLink = styled.div`
  display: inline-block;
  a {
    border-bottom: inset transparent;
    color: #243c84;
    display: block;
    font-weight: bold;
    padding: 15px;
    position: relative;
    margin-right: 10px;
    text-decoration: none;
    text-transform: uppercase;
    :hover:after {
      transform: scaleX(1);
    }
    :after {
      content: '';
      position: absolute;
      left: 15px;
      bottom: 0;
      right: 15px;
      border-bottom: 2px solid #243c84;
      transition: transform 250ms ease-in-out;
      transform: scaleX(0);
      transform-origin: left center;
    }
  }
  img {
    height: 1rem;
    margin-bottom: 0;
  }
`
const Donate = styled.a`
  display: inline-block;
  font-family: "LEMONMILK", impact, Sans-Serif;
  font-weight: 700;
  font-style: italic;
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

const Header = ({ page }) => {
  const [logoWidth, setLogoWidth] = useState(400)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerBackground, setHeaderBackground] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleScroll = (e) => {
    if(window.scrollY > lastScrollY) {
      setLastScrollY(window.scrollY)
      if(window.scrollY <= 250) {
        setLogoWidth(400 - window.scrollY)
      }
      if(headerBackground < 1) {
        setHeaderBackground(window.scrollY * 0.005)
      }
    }
    if(window.scrollY === 0) {
      setHeaderBackground(0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      style={{
        backgroundColor: `rgba(255, 255, 255,${headerBackground})`,
        position: `fixed`,
        top: 0,
        width: `100%`,
        zIndex: 100
      }}
    >
      <DesktopHeader role="navigation">
        <LogoContainer>
          {page === 'home' ? 
          <h1 style={{ margin: 0, maxWidth: logoWidth }}>
            <a href="/" title={site.title[language]}><img src={logo} alt={`Text reading: Tony "Suavecito" Adame for Santa Ana City Council`} /></a>
          </h1>
          : 
          <div style={{ margin: 0, maxWidth: logoWidth }}>
            <a href="/" title={site.title[language]}><img src={logo} alt={`Text reading: Tony "Suavecito" Adame for Santa Ana City Council`} /></a>
          </div>}
        </LogoContainer>
        <Nav>
          <DesktopLink><Link to="/tonys-story">{navigation_text.tonys_story[language]}</Link></DesktopLink>
          <DesktopLink><Link to="/about-ward-1">{navigation_text.about_ward_1[language]}</Link></DesktopLink>
          <DesktopLink><Link to="/">{navigation_text.tonys_vision[language]}</Link></DesktopLink>
          {/* <DesktopLink><Link to="/">{navigation_text.issues[language]}</Link></DesktopLink> */}
          <DesktopLink><Link to="/">{navigation_text.get_involved[language]}</Link></DesktopLink>
          {/* <DesktopLink><Link to="/">{navigation_text.language_toggle[language]}</Link></DesktopLink> */}
          <DesktopLink>
            <a href="https://facebook.com/"><img src={facebook} alt="facebook icon" /></a>
          </DesktopLink>
          <DesktopLink>
            <a href="https://instagram.com/"><img src={instagram} alt="instagram icon" /></a>
          </DesktopLink>
          <DesktopLink>
            <a href="https://twitter.com/"><img src={twitter} alt="twitter icon" /></a>
          </DesktopLink>
          {/* <Donate className="button" href="/">{navigation_text.donate[language]}</Donate> */}
        </Nav>
      </DesktopHeader>
      <MobileHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <MobileDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </header>
  )
}

export default Header
