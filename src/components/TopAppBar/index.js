import React, { useState } from "react"
import {Col, Icon, Menu, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";
import ResponsiveAntMenu from "../ResponsiveMenu";
import { Link } from "gatsby"

const { Title, Paragraph, Text } = Typography;

function TopAppBar(props) {
    const { classes } = props;
    const { t, i18n } = useTranslation('common');
    const [key, setKey] = useState("/");
    const handleClick  = e => {
        console.log('click ', e);
        setKey(e.key);
    };
    const isPartiallyActive = ({ isPartiallyCurrent, to}) => {
        console.log('click ', isPartiallyCurrent);

    }
    const menu = pMode =>{
        return <ResponsiveAntMenu
          mobileMenuContent={isMenuShown =>  <Icon type="menu" rotate={isMenuShown ? 90 : 0}/>}
          menuClassName={'responsive-ant-menu'}
        >
            {(onLinkClick) =>
              <Menu
                selectedKeys={[key]}
                onClick={handleClick}
                style={{lineHeight: '64px'}}
              >
                  <Menu.Item key="/">
                      {t('home')}
                      <Link to="/" getProps={isPartiallyActive}/>
                  </Menu.Item>
                  <Menu.Item key="/about-us">{t('about')}
                      <Link to="/about-us" getProps={isPartiallyActive}/>
                  </Menu.Item>
                  <Menu.Item key="/blog">{t('blog')}
                      <Link to="/blog" getProps={isPartiallyActive}/>
                  </Menu.Item>
              </Menu>
            }
        </ResponsiveAntMenu>
    }
    return (

      <Row
        type={'flex'}
        justify={'space-between'}
        align={'middle'}
      >
          <Col span={24}>

              <Row type={'flex'} justify={'center'} align={'middle'}>
                  {/*<Img className={'logo'} src={imgFile} style={{width: '100px'}}/>*/}
              </Row>

              <Row type={'flex'} justify={'center'} align={'middle'}>
                  {menu('horizontal')}
              </Row>
          </Col>


      </Row>
    );

}
export default(TopAppBar);
