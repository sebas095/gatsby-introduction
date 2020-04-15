import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ pageContext, data }) => {
  return (
    <div>
      <h1>{pageContext.relativePath}</h1>
      <Img fluid={data.file.childImageSharp.fluid} alt="GOW - Kratos" />
    </div>
  )
}

export const query = graphql`
  query($relativePath: String) {
    file(relativePath: { eq: $relativePath }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          # Query Fragments
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
