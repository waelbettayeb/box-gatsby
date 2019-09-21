import React from 'react';
import Client from "./Client";
import BottomParallaxSection from "../ParallaxSection/BottomParallaxSection";
import {useTranslation} from "react-i18next";
import { graphql, useStaticQuery } from "gatsby"

function Clients(props) {
  const {t} = useTranslation('common');
  const data = useStaticQuery(graphql`
      query {
          allFile(filter: {relativeDirectory: {eq: "images/clients"}}) {
              edges {
                  node {
                      id
                      childImageSharp {
                          fluid  {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  `)
  return (
    <BottomParallaxSection title={t('whoTrustUs')}
                           background={'#ff662b'}
                           textColor={"#ffffff"}>
      {data.allFile.edges.map(({node}) => (
        <Client fixed={node.childImageSharp.fixed}
                fluid={node.childImageSharp.fluid}
                alt="clients"
        />
        ))}
    </BottomParallaxSection>
  );
}
export default(Clients);
