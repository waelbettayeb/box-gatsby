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
          file(relativePath: { eq: "images/services.png" }) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          markdownRemark(frontmatter: {title: {eq: "Services"}}) {
              html
          }
      }
  `)
  console.log("data", data)
  return(<>
    <SEO title={t('aboutUs')} />
    <Row type={'flex'} justify={'center'}>
      <Col xl={12}>
        <Row type={'flex'} justify={'center'}>
          <Img fixed={data.file.childImageSharp.fixed} fluid={data.file.childImageSharp.fluid}  style={{width:'100%'}}/>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <Title style={{textAlign:'center', margin:"20px"}} level={1}>
            {t('services.name')}
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

  </>);
}
export const pageQuery = graphql`
    query {
        file(relativePath: {eq: "pages/services.md"}) {
            childMarkdownRemark {
                html
            }
        }
    }

`

export default ServicesPage
