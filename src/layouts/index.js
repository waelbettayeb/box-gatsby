/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import TopAppBar from "../components/TopAppBar"
import FooterDescription from "../components/FooterDescription"
import { enquireScreen } from 'enquire-js';
import './i18n';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }
  render() {
    return(
    <React.Fragment>
      <TopAppBar/>
      {this.props.children}
      <FooterDescription/>
    </React.Fragment>
    )}
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
