import React from "react"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Col, Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
const { Title, Paragraph, Text } = Typography;

const ServicesPage = () => {
  const {t} = useTranslation('common');
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "images/about-us.png" }) {
              childImageSharp {
                  # Specify a fixed image and fragment.
                  # The default width is 400 pixels
                  fluid {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return(<>
    <SEO title={t('aboutUs')} />
    <Row type={'flex'} justify={'center'}>
      <Col xl={12}>
        <Row type={'flex'} justify={'center'}>
          <Img fixed={data.file.childImageSharp.fixed} fluid={data.file.childImageSharp.fluid}  style={{width:'100%'}}/>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <Title style={{textAlign:'center', margin:"20px"}} level={"3"}>
            {t('about')}
          </Title>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <Paragraph style={{textAlign:'center'}}>
            {t('pageNotFound.description')}
          </Paragraph>
        </Row>
      </Col>
    </Row>

  </>);
}


export default ServicesPage
