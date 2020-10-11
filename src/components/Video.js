import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  iframe,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = props => {
  return (
    <Container>
      <VideoWrapper>
        <iframe
          title={props.title}
          width="560"
          height="315"
          src={`${props.src}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </Container>
  )
}

export default Video
