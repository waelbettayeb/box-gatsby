import React from 'react';
import {Button, Col, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";
import featureStyles from "./feature.module.css"
import Icon from "../../Icon/Icon"

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
    <Col className={featureStyles.container} xs={24} sm={12} md={8} lg={6} style={{ padding: '20px'}}>
      <Row type={'flex'} justify={'center'}>
        <Icon className={featureStyles.icon} iconType={props.iconType}  style={{ padding: '20px', fontSize: '60px' }}/>
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
