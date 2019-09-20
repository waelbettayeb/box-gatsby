import React from 'react';
import {Button, Col, Icon, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";

const { Title, Paragraph, Text } = Typography;
const padding = 30;
const styles = theme => ({
  root: {
    paddingTop: theme.spacing(padding),
    paddingBottom: theme.spacing(padding),
  },

});

function Feature(props) {
  const { classes } = props;
  const { t, i18n } = useTranslation('common');
  return (
    <Col xs={24} sm={12} md={8} lg={6} style={{ padding: '20px'}}>
      <Row type={'flex'} justify={'center'}>
        <Icon type={props.iconType}  style={{ padding: '20px', fontSize: '60px' }}/>
      </Row>
      <Row type={'flex'} justify={'center'}>
        <Title level={4} style={{ textAlign:'center' }}>
          {props.title}
        </Title>
      </Row>
      <Row type={'flex'} justify={'center'}>
        <Paragraph style={{ textAlign:'center' }}>
          {props.description}
        </Paragraph>
      </Row>
      <Row type={'flex'} justify={'center'}>
        {/*<Button type="link">*/}
        {/*    {t('learnMore')}*/}
        {/*    <Icon type="right" style={{ fontSize: '13px' }}/>*/}
        {/*</Button>*/}
      </Row>
    </Col>
  );
}
export default(Feature);
