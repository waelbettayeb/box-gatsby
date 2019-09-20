import React from 'react';
import HorizontalParallaxSection from "../ParallaxSection/HorizontalParallaxSection";
// import Img from 'react-image'
import {Button, Col, Divider, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";

const { Title, Paragraph, Text } = Typography;

const buttonPadding = 10;
const padding = 60;

function Hero(props) {
    const {t} = useTranslation('common');
    let pButton, sButton, divider;
    if(props.primaryButton){
        pButton = <Col span={13}>
            <Button type="primary"
                    size={'large'}
                    href={props.primaryButton.link}
                    block>
                {props.primaryButton.text}
            </Button>
        </Col>
    }
    if(props.secondaryButton){
        sButton =
            <Col span={11}>
                <Button size={'large'}  href={props.secondaryButton.link} block>
                    {props.secondaryButton.text}
                </Button>
            </Col>

    }
    if(props.paragraph){
        divider = <Divider />
    }
    return (
        <HorizontalParallaxSection
            justify = {'space-between'}
            style={{ paddingTop:padding, paddingBottom:padding }}
        >
            <Col md={14} lg={10}>
                <Col>
                    <Row type={'flex'} justify={'center'}>
                        <Title style={{textAlign:'center', fontSize:'60px'}}>
                            Let's move your make
                        </Title>
                    </Row> <
                    Row type={'flex'} justify={'center'}>
                        <Paragraph style={{textAlign:'center', fontSize:'16px'}}>
                            LetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis lorem.
                        </Paragraph>
                    </Row>
                </Col>
                <Row type={'flex'} justify={'center'} gutter={8} style={{ paddingTop:buttonPadding, paddingBottom:buttonPadding }}>
                    {pButton}
                    {sButton}
                </Row>
            </Col>
            <Col md={14} lg={12}>
                {/*<Img src={props.src} style={{width:'100%'}}/>*/}
            </Col>
        </HorizontalParallaxSection>
    );
}
export default(Hero);