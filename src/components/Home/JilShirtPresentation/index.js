import React from "react"
import { useTranslation } from "react-i18next"
import { Col, Typography } from "antd"
import { graphql, Link, useStaticQuery } from "gatsby"
import BottomParallaxSection from "../../ParallaxSection/BottomParallaxSection"
import Img from "gatsby-image"

function JilShirtPresentation(props) {
    const {t} = useTranslation('common');
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/jilshirt.png" }) {
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
            <BottomParallaxSection title={'JilShirt'}
                                   paragraph={t('jilShirt.description')}
                                   linkButton={{text:t('learnMore'), link: t('jilShirt.link')}}
            >
                <Col md={14} lg={12}>
                    <Img fixed={data.file.childImageSharp.fixed} fluid={data.file.childImageSharp.fluid}  style={{width:'100%'}}/>
                </Col>
            </BottomParallaxSection>
        </Col>);
}

export default JilShirtPresentation
