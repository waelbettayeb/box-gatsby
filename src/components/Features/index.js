import React from 'react';
import { Menu, Typography } from "antd"
import Feature from "./Feature";
import BottomParallaxSection from "../ParallaxSection/BottomParallaxSection";
import { graphql, Link, useStaticQuery } from "gatsby"
import { useTranslation } from "react-i18next"

const { Title, Paragraph, Text } = Typography;

export default (props) => {
  const data = useStaticQuery(graphql`
      query {
          allServicesJson {
              nodes {
                  id
              }
          }
      }
  `)
  const {t} = useTranslation('common');
  return (
    <BottomParallaxSection title={props.title}
                           paragraph={props.paragraph}
                           linkButton={{text:<Link to="/services">{t('learnMore')}</Link> }}
                           background={"#f5f5f5"}
    >
      {
        data.allServicesJson.nodes.map(( node ) => (
          <Feature
            title={t(node.id+'.name')}
            iconType={t(node.id+'.iconType')}
            description={t(node.id+'.description')}
          />
        ))
      }
    </BottomParallaxSection>
  );
}
