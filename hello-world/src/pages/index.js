import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <div>
      <h1>Home</h1>
      <Img fluid={data.file.childImageSharp.fluid} alt="GOW - Kratos" />
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "kratos.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          # Query Fragments
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
