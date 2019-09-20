import React from 'react';
import {Button, Col, Icon, Row, Typography} from "antd";
import PropTypes, {string} from "prop-types";

const { Title, Paragraph, Text } = Typography;
const padding = 70;


function BottomParallaxSection(props) {
    const { classes } = props;
    let linkButton;

    if(props.linkButton){
        linkButton =
            <Col span={11}>
                <Button type="link" size={'large'} href={props.linkButton.link} block style={{color: props.textColor}}>
                    {props.linkButton.text}
                    <Icon type="right" style={{ fontSize: '13px' }}/>
                </Button>
            </Col>

    }
    return (
        <Row type={'flex'} justify={'center'} style={
            {
                background: props.background,
                paddingTop: padding,
                paddingBottom:padding,
            }
        }>
            <Col span={18}xl={20}>
                <Row type={'flex'} justify={'center'}>
                    <Col span={24}>
                        <Title style={{ textAlign:'center', color: props.textColor}}>
                            {props.title}
                        </Title>
                    </Col>
                    <Col span={24}>
                        <Title style={{ textAlign:'center', color: props.textColor}} level={2}>
                            {props.title2}
                        </Title>
                    </Col>
                    <Paragraph style={{ textAlign:'center', color: props.textColor}}>
                        {props.paragraph}
                    </Paragraph>
                </Row>
                <Row type={'flex'} justify={'center'}>
                    {linkButton}
                </Row>
                <Row type={'flex'} justify={'space-around'}>
                    {props.children}
                </Row>

            </Col>
        </Row>
    );
}
BottomParallaxSection.propTypes = {
    title: string,
    title2: string,
    paragraph: string,
    textColor: string,
    linkButton:PropTypes.shape({
        text: string,
        link: string
    }),
}
export default(BottomParallaxSection);
