import React from 'react';
import { Button, Col, Layout, Row, Typography } from "antd"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { useTranslation } from "react-i18next"
import Icon from "../Icon/Icon"

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
    const {t} = useTranslation('common');
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/company-logo-dark.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
      <>
          <Footer style={{background: 'black', paddingBottom: padding, paddingTop: padding}}>

              <Row type={'flex'} align={'space-around'} gutter={8}>
                  <Col span={24} md={6}>
                      <Row type={'flex'} align={'center'} justify={'middle'}>
                          <Img 
                               fluid={data.file.childImageSharp.fluid}
                               style={{width:'30%'}}
                          />
                      </Row>
                  </Col>
                  <Col span={24} md={6}>
                      <Row type={'flex'}>
                          <Title level={4} style={{color:'white'}}>
                              {t('address')} :
                          </Title>
                      </Row>
                      <Row type={'flex'}>
                          <Paragraph style={{color:'white'}}>
                              Résidence "La Perle de la Méditerranée" Bloc D N150 , Kharouba ,Mostaganem, 27000 Algérie.
                          </Paragraph>
                      </Row>
                  </Col>
                  <Col span={24} md={6}>
                      <Row type={'flex'}>
                          <Title level={4} style={{color:'white'}}>
                              {t('phoneNumber')} :
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
                  <Col span={24} md={6}>
                      <Row type={'flex'}>
                          <Title level={4} style={{color:'white'}}>
                              {t('links')} :
                          </Title>
                      </Row>
                      <Row type={'flex'}>
                          <Col>
                              <Row>
                                  <Paragraph style={{color:'white'}}>
                                      info@class-box.net
                                  </Paragraph>
                              </Row>
                              <Row>
                                  <Button type="link" style={{margin:"5px"}} shape={'circle'}
                                          icon={<Icon iconType={"facebook"}/>}
                                          href={"https://www.facebook.com/classbox.agency/"}/>
                                  <Button type="link" style={{margin:"5px"}} shape={'circle'}
                                          icon={<Icon iconType={"instagram"}/>}
                                          href={"https://www.instagram.com/classboxagency/"}/>
                                  <Button type="link" style={{margin:"5px"}} shape={'circle'}
                                          icon={<Icon iconType={"linkedin"}/>}
                                          href={"https://www.linkedin.com/company/20497683"}/>
                              </Row>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Footer>
          <Row type={'flex'} align={'center'} style={{background:'black'}}>
              <Text style={{color:'white'}}>
                  Made with ♥ by &nbsp;
                  <a href={"https://github.com/wael-mohamed"}>Wael
                  </a>
              </Text>
          </Row>
      </>
    );
}
export default(FooterDescription);
