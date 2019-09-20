import React from 'react';
import {Col, Row, Typography} from "antd";
// import Img from 'react-image'

const { Title, Paragraph, Text } = Typography;
const padding = 30;
const styles = theme => ({
    root: {
        paddingTop: theme.spacing(padding),
        paddingBottom: theme.spacing(padding),
    },

});
const size = 200;
function Client(props) {
    const { classes } = props;
    return (
        <Col xs={24} sm={12} lg={6} xl={3} style={{ padding: '20px'}}>
            <Row type={'flex'} justify={'center'}>
                {/*<Img src={props.src} style={{width:'200px'}}/>*/}
            </Row>
        </Col>
    );
}
export default(Client);
