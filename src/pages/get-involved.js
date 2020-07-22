import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { language, get_involved } from "../components/language"

const Container = styled.div`
  padding: 110px 20px 60px;
  position: relative;
  @media (min-width: 1024px) {
    padding: 175px 20px 140px 50%;
  }
`
const StyledBackground = styled(BackgroundImage)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat; 
    background-size: cover;
  }
}
`
const Inner = styled.div`
  max-width: 590px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    margin: 0;
    position: relative;
    max-width: 506px;
    padding: 0 0 0 40px;
  }
`
const H1 = styled.h1`
  color: #243c84;
`
const Form = styled.form`
  max-width: 590px;
  margin: 0 auto;
  text-align: left;
`
const Fieldset = styled.div`
  margin: 0 0 18px;
`
const LabelWrapper = styled.div`
  margin: 0 0 6px;
`
const TextInput = styled.input`
  height: 60px;
  display: block;
  width: 100%;
  border: 1px solid #243c84;
  background: #fff;
  font: 400 15px/22px brother-1816,sans-serif;
  color: #12204A;
  color: rgba(18,32,74,.7);
  padding: 18px 20px;
  appearance: none;
  border-radius: 0;
  &.button {
    background-color: #243c84;
    color: #fff;
    font-family: "LEMONMILK";
    font-weight: bold;
  }
`
const InlineSet = styled.div`
  @media (min-width: 768px) {
    margin: 0 -5px;
  }
  :after {
    display: block;
    content: "";
    clear: both;
  }
  .fieldset {
    margin: 0 0 18px;
    float: left;
    width: 75%;
    padding: 0 5px;
    &.zip {
      width: 25%;
    }
  }
`
const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  margin: 0;
`
const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 40px;
  :before {
    background-color: #fff;
    height: 25px;
    width: 25px;
    border: 1px solid #12204A;
    left: 0;
    top: 0;
    position: absolute;
    content: '';
    display: block;
  }
  &:after {
    content: '${props => props.afterContent}';
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    font-size: 25px;
    line-height: 23px;
    text-align: center;
    color: #233F94;
  }
`
const Page = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(0)
  const [checkboxContent, setAfterContent] = useState('')
  const [email, setEmail] = useState('')
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [zip, setZip] = useState('')
  const handleClick = () => {
    if(!checkboxChecked) {
      setCheckboxChecked(1)
      setAfterContent('x')
    }else{
      setCheckboxChecked(0)
      setAfterContent('')
    }
  }
  const handleChange = () => {
    console.log('the value changed');
  }
  const data = useStaticQuery(graphql`
    query {
      image_1: file(relativePath: { eq: "contact-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Get Involved" />
      <Container>
        <StyledBackground fluid={data.image_1.childImageSharp.fluid} style={{position: "absolute", backgroundPosition: "left top"}}></StyledBackground>
        <Inner>
          <H1>
            <div>{get_involved.title[language][0]}</div>
            <div>{get_involved.title[language][1]}</div>
          </H1>
          <div>
            <p>{get_involved.body[language]}</p>
          </div>
          <Form name="GetInvolved" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Fieldset>
              <LabelWrapper>
                <label htmlFor="firstname">First Name</label>
              </LabelWrapper>
              <div>
                <TextInput size="16" id="firstname" name="firstname" type="text" onChange={(e) => setFname(e.target.value)}/>
              </div>
            </Fieldset>
            <Fieldset>
              <LabelWrapper>
                <label htmlFor="lastname">Last Name</label>
              </LabelWrapper>
              <div>
                <TextInput size="25" id="lastname" name="lastname" type="text" onChange={(e) => setLname(e.target.value)}/>
              </div>
            </Fieldset>
            <Fieldset>
              <LabelWrapper>
                <label htmlFor="email">Email</label>
              </LabelWrapper>
              <div>
                <TextInput size="48" id="email" name="email" type="email" required="required" onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </Fieldset>
            <InlineSet>
              <div className="fieldset">
                <LabelWrapper>
                  <label htmlFor="mobile">Mobile Phone</label>
                </LabelWrapper>
                <div>
                  <TextInput size="15" id="mobile" name="mobile" type="tel" onChange={(e) => setPhone(e.target.value)}/>
                </div>
              </div>
              <div className="fieldset zip">
                <LabelWrapper>
                  <label htmlFor="zip">Zip Code</label>
                </LabelWrapper>
                <div>
                  <TextInput size="8" id="zip" name="zip" type="text" onChange={(e) => setZip(e.target.value)}/>
                </div>
              </div>
            </InlineSet>
            <Fieldset>
              <div>
                <Checkbox name="newsletter" type="checkbox" value={checkboxChecked}></Checkbox>
                <CheckboxLabel htmlFor="newsletter" onClick={handleClick} afterContent={checkboxContent}>Sign up for updates</CheckboxLabel>
              </div>
            </Fieldset>
            <TextInput type="submit" value="Let's Go" className="button" />
          </Form>
        </Inner>
      </Container>
    </Layout>
  )
} 

export default Page