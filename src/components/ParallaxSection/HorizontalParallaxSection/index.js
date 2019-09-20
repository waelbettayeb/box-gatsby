import React from 'react';
import {Col, Row, Typography} from "antd";

const { Title, Paragraph, Text } = Typography;


function HorizontalParallaxSection(props) {

    const { classes } = props;

    return (
        <div>
            <Row type={'flex'} align={'middle'} justify={'center'} style={props.style}>
                <Col span={18}>
                    <Row type={'flex'} align={'middle'}justify={props.justify} gutter={24}>
                        {props.children}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
export default(HorizontalParallaxSection);
