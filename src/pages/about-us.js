import React from "react"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Col, Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
const { Title, Paragraph, Text } = Typography;

const AboutUsPage = () => {
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
          markdownRemark(frontmatter: {title: {eq: "About us"}}) {
              html
          }
      }
  `)
  return(<>
    <SEO title={t('aboutUs.name')} />
    <Row type={'flex'} justify={'center'}>
      <Col xs={20} xl={12}>
        <Row type={'flex'} justify={'center'}>
          <Img fixed={data.file.childImageSharp.fixed} fluid={data.file.childImageSharp.fluid}  style={{width:'100%'}}/>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <Title style={{textAlign:'center', margin:"20px"}} level={"3"}>
            {t('aboutUs.name')}
          </Title>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <div className="blog-post-container">
            <div className="blog-post">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </div>
          </div>
        </Row>
      </Col>
    </Row>
    <br/>
  </>);
}


export default AboutUsPage
