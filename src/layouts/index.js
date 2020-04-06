/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import TopAppBar from "../components/TopAppBar"
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import common_fr from "../translations/fr/common.json";
import common_en from "../translations/en/common.json";
import FooterDescription from "../components/FooterDescription"
import { enquireScreen } from 'enquire-js';

const Index = ({ children }) => {
  i18next
    .use(initReactI18next)
    .init({
      fallbackLng: 'fr',
      interpolation: { escapeValue: false },  // React already does escaping
      lng: 'fr',                              // language to use
      resources: {
        en: {
          common: common_en               // 'common' is our custom namespace
        },
        fr: {
          common: common_fr
        },
      },
    });
  return (
    <>
      <TopAppBar/>
      {children}
      <FooterDescription/>
    </>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
