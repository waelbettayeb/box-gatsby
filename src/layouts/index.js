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


class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: true,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    return(
    <React.Fragment>
      <TopAppBar
        id="Nav3_0"
        key="Nav3_0"
        isMobile={this.state.isMobile}
      />
      {this.props.children}
      <FooterDescription/>
    </React.Fragment>
    )}
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
