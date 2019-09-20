import React from 'react';
import {Col, Layout, Row, Typography} from "antd";
import Img from 'react-image'
import darkLogoImageFile from '../../static/img/company-logo-dark.png'

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
    const { classes } = props;
    return (
        <Footer style={{background: 'black', paddingBottom: padding, paddingTop: padding}}>

            <Row type={'flex'} align={'space-around'} gutter={8}>
                <Col span={24} md={8}>
                    <Row type={'flex'} align={'center'} justify={'middle'}>
                        <Img src={darkLogoImageFile} style={{width: '100px', margin: '20px'}}/>
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
