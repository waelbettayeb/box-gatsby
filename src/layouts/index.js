/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button, Menu } from "antd"
import TopAppBar from "../components/TopAppBar"

const Index = ({ children }) => {

  return (
    <>
      <TopAppBar/>
      {children}
    </>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
