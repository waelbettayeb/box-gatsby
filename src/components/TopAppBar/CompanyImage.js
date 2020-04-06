import React from "react"
import render from "less/lib/less/render"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import TweenOne from "rc-tween-one"

export default function() {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: {eq: "images/company-logo.png"}) {
              childImageSharp {
                  fluid  {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return(
    <Img
      className={'header3-logo'}
      fluid={data.file.childImageSharp.fluid}
      alt="company-logo"
      style={{width: '100px'}}
    />
  )
}
