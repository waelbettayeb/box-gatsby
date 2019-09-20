import React from 'react';
import Hero from "../Hero";
import BottomParallaxSection from "../../components/ParallaxSection/BottomParallaxSection";
import Features from "../../components/Features";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import Clients from "../Clients";
import heroImageFile from "../../static/img/hero.png"
import jilShirtImageFile from "../../static/img/jilshirt.png"
import blogImageFile from "../../static/img/blog.png"
import {Col, Row, Typography} from "antd";
import { Link } from "gatsby"
import BlogPresentation from "./BlogPresentation"
import JilShirtPresentation from "./JilShirtPresentation"
import FooterDescription from "./FooterDescription"
// import Img from 'react-image'

const { Title, Paragraph, Text } = Typography;

function Home(props) {
    const {t} = useTranslation('common');
    return (<div>
        <Hero justify = {'start'}
              title={t('welcome.title', { name: "company-name" })}
              paragraph={t('welcome.intro')}
              primaryButton={{text: t('contactUs') , link: "mailto:someone@yoursite.com"}}
              src={heroImageFile}
        />
        <Features title={t('services.name')}
                  paragraph={t('services.description')}
                  background={"black"}
                  linkButton={{text:t('learnMore'), link: ""}}/>

        <Row type={'flex'} align={'space-around'} >
            <BlogPresentation/>
            <JilShirtPresentation/>
        </Row>
        <Clients/>
        {/*<Col span={24}>*/}
        {/*    <Row type={'flex'} align={'middle'} justify={'center'}>*/}
        {/*        <Col md={14} lg={12}>*/}
        {/*            <Title style={{textAlign:'center'}}>*/}
        {/*                Let's move your make*/}
        {/*            </Title>*/}
        {/*        </Col>*/}
        {/*        <Col md={14} lg={12}>*/}
        {/*            <Button type="primary"*/}
        {/*                    href={"props.primaryButton.link"}*/}
        {/*            >*/}
        {/*                {t('contactUs')}*/}
        {/*            </Button>*/}
        {/*        </Col>*/}
        {/*    </Row>*/}
        {/*</Col>*/}
        <FooterDescription/>
    </div>);
}
Home.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Home
