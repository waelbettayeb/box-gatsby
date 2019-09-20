import React from 'react';
import {Col, Layout, Row, Typography} from "antd";
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const {Footer} = Layout;

const { Title, Paragraph, Text } = Typography;
const padding = '100px';
const styles = theme => ({
    root: {
        paddingTop: theme.spacing(padding),
        paddingBottom: theme.spacing(padding),
    },

});
const size = 200;
function FooterDescription(props) {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/company-logo-dark.png" }) {
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
        <Footer style={{background: 'black', paddingBottom: padding, paddingTop: padding}}>

            <Row type={'flex'} align={'space-around'} gutter={8}>
                <Col span={24} md={8}>
                    <Row type={'flex'} align={'center'} justify={'middle'}>
                        <Img fixed={data.file.childImageSharp.fixed}
                             fluid={data.file.childImageSharp.fluid}
                             style={{width:'30%'}}
                        />
                    </Row>
                </Col>
                <Col span={24} md={8}>
                    <Row type={'flex'}>
                        <Title level={4} style={{color:'white'}}>
                            Phone Number :
                        </Title>
                    </Row>
                    <Row type={'flex'}>
                        <Paragraph style={{color:'white'}}>
                            +213 44590302
                        </Paragraph>
                    </Row>
                    <Row type={'flex'}>
                        <Paragraph style={{color:'white'}}>
                            +213 770718843
                        </Paragraph>
                    </Row>
                </Col>
                <Col span={24} md={8}>
                    <Row type={'flex'}>
                        <Title level={4} style={{color:'white'}}>
                            Address :
                        </Title>
                    </Row>
                    <Row type={'flex'}>
                        <Paragraph style={{color:'white'}}>
                            Résidence "La Perle de la Méditerranée" Bloc D N150 , Kharouba ,Mostaganem, 27000 Algérie.
                        </Paragraph>
                    </Row>
                </Col>
            </Row>
        </Footer>

    );
}
export default(FooterDescription);