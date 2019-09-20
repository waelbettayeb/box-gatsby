import React from "react"
import { useTranslation } from "react-i18next"
import { Col, Typography } from "antd"
import { graphql, Link, useStaticQuery } from "gatsby"
import BottomParallaxSection from "../../ParallaxSection/BottomParallaxSection"
import Img from "gatsby-image"

function BlogPresentation(props) {
    const {t} = useTranslation('common');
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/blog.png" }) {
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
    return (
        <Col xl={12}>
            <BottomParallaxSection title={t('blog.name')}
                                   paragraph={t('blog.description')}
                                   linkButton={{text:<Link to="/blog">{t('learnMore')}</Link> }}
            >
                <Col md={14} lg={12}>
                    <Img fixed={data.file.childImageSharp.fixed} fluid={data.file.childImageSharp.fluid}  style={{width:'100%'}}/>
                </Col>
            </BottomParallaxSection>
        </Col>);
}

export default BlogPresentation
