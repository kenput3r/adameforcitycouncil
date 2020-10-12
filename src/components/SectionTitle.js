import React from "react"
import styled from "styled-components"

const H3 = styled.h3`
  color: #243c84;
  font-size: 2rem;
  text-align: center;
  padding-top: 30px;

  @media (max-width: 375px) {
    font-size: 1.75rem;
  }
`

const SectionTitle = props => {
  return <H3>{props.title}</H3>
}

export default SectionTitle
