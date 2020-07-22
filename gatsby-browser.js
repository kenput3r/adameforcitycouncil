/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location)
  window.scrollTo(...(currentPosition || [0, 0]))
  return false
}

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
exports.onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}