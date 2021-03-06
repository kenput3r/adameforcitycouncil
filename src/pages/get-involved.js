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
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 20px;
  }
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
  .zip {
    font-size: ${props => props.language === "spanish" && "12px"};
    line-height: 1.45em;
  }
`
const TextInput = styled.input`
  height: 60px;
  display: block;
  width: 100%;
  border: 1px solid #243c84;
  background: #fff;
  font: 400 15px/22px brother-1816, sans-serif;
  color: #12204a;
  color: rgba(18, 32, 74, 0.7);
  padding: 18px 20px;
  appearance: none;
  border-radius: 0;
  &.button {
    background-color: #243c84;
    color: #fff;
    font-family: "LEMONMILK";
    font-weight: bold;
    :hover {
      cursor: pointer;
    }
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
const postContact = async (
  event,
  email,
  fName,
  lName,
  phone,
  sendNewsletter
) => {
  event.preventDefault()
  const contact_form = document.getElementById("GetInvolved")
  let form_errors = false
  for (let i = 0; i < contact_form.elements.length; i++) {
    const element = contact_form.elements[i]
    if (element.required && !element.value) {
      form_errors = true
    }
  }
  if (!form_errors) {
    if (sendNewsletter) {
      const body = { email: email, fName: fName, lName: lName, phone: phone }
      try {
        const response = await fetch("/.netlify/functions/create-contact", {
          method: "POST",
          body: JSON.stringify(body),
        })
        if (!response.error) {
          console.log("no errors")
        } else {
          console.log(response.error)
        }
      } catch (error) {
        console.log(error)
      }
    }
    contact_form.submit()
  }
}

const Page = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(0)
  const [checkboxContent, setAfterContent] = useState("")
  const [email, setEmail] = useState("")
  const [fName, setFname] = useState("")
  const [lName, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const handleClick = () => {
    if (!checkboxChecked) {
      setCheckboxChecked(1)
      setAfterContent("x")
    } else {
      setCheckboxChecked(0)
      setAfterContent("")
    }
  }

  const handleSubmit = event => {
    postContact(event, email, fName, lName, phone, checkboxChecked)
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
    <Layout location="/get-involved">
      <SEO title="Get Involved" />
      <Container>
        <StyledBackground
          fluid={data.image_1.childImageSharp.fluid}
          style={{ position: "absolute", backgroundPosition: "left top" }}
        ></StyledBackground>
        <Inner>
          <H1>
            <div>{get_involved.title[language][0]}</div>
            <div>{get_involved.title[language][1]}</div>
          </H1>
          <div>
            <p>{get_involved.body[language]}</p>
          </div>
          <Form
            id="GetInvolved"
            name="GetInvolved"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={event => handleSubmit(event)}
          >
            <input type="hidden" name="form-name" value="GetInvolved" />
            <Fieldset>
              <LabelWrapper>
                <label htmlFor="firstname">
                  {get_involved.first_name[language]}
                </label>
              </LabelWrapper>
              <div>
                <TextInput
                  size="16"
                  id="firstname"
                  name="firstname"
                  type="text"
                  onChange={e => setFname(e.target.value)}
                />
              </div>
            </Fieldset>
            <Fieldset>
              <LabelWrapper>
                <label htmlFor="lastname">
                  {get_involved.last_name[language]}
                </label>
              </LabelWrapper>
              <div>
                <TextInput
                  size="25"
                  id="lastname"
                  name="lastname"
                  type="text"
                  onChange={e => setLname(e.target.value)}
                />
              </div>
            </Fieldset>
            <Fieldset>
              <LabelWrapper>
                <label htmlFor="email">{get_involved.email[language]}</label>
              </LabelWrapper>
              <div>
                <TextInput
                  size="48"
                  id="email"
                  name="email"
                  type="email"
                  required="required"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </Fieldset>
            <InlineSet>
              <div className="fieldset">
                <LabelWrapper>
                  <label htmlFor="mobile">{get_involved.phone[language]}</label>
                </LabelWrapper>
                <div>
                  <TextInput
                    size="15"
                    id="mobile"
                    name="mobile"
                    type="tel"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="fieldset zip">
                <LabelWrapper language={language}>
                  <label htmlFor="zip" className="zip">
                    {get_involved.zip[language]}
                  </label>
                </LabelWrapper>
                <div>
                  <TextInput
                    size="8"
                    id="zip"
                    name="zip"
                    type="text"
                    onChange={e => setZip(e.target.value)}
                  />
                </div>
              </div>
            </InlineSet>
            <Fieldset>
              <div>
                <Checkbox
                  name="newsletter"
                  type="checkbox"
                  value={checkboxChecked}
                ></Checkbox>
                <CheckboxLabel
                  htmlFor="newsletter"
                  onClick={handleClick}
                  afterContent={checkboxContent}
                >
                  {get_involved.register[language]}
                </CheckboxLabel>
              </div>
            </Fieldset>
            <TextInput
              type="submit"
              value={get_involved.lets_go[language]}
              className="button"
            />
          </Form>
        </Inner>
      </Container>
    </Layout>
  )
}

export default Page
