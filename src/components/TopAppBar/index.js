import React, { useState } from "react"
import { Col, Icon, Menu, Row } from "antd"
import { useTranslation } from "react-i18next"
import ResponsiveAntMenu from "../ResponsiveMenu"
import { Link } from "gatsby"


function TopAppBar(props) {
    const { t } = useTranslation('common');
    const [key, setKey] = useState("/");
    const handleClick  = e => {
        console.log('click ', e);
        setKey(e.key);
    };
    const isPartiallyActive = to => (({ isPartiallyCurrent}) => {
        if(isPartiallyCurrent)
            setKey(to);
    })
    const menu = () =>{
        return <ResponsiveAntMenu
          mobileMenuContent={isMenuShown =>  <Icon type="menu" rotate={isMenuShown ? 90 : 0}/>}
          menuClassName={'responsive-ant-menu'}
        >
            {() =>
              <Menu
                selectedKeys={[key]}
                onClick={handleClick}
                style={{lineHeight: '64px'}}
              >
                  <Menu.Item key="/">
                      {t('home')}
                      <Link to="/" getProps={isPartiallyActive("/")}  {...props}/>
                  </Menu.Item>
                  <Menu.Item key="/services">{t('services.name')}
                      <Link to="/services" getProps={isPartiallyActive("/services")} {...props}/>
                  </Menu.Item>
                  <Menu.Item key="/about-us">{t('about')}
                      <Link to="/about-us" getProps={isPartiallyActive("/about-us")} {...props}/>
                  </Menu.Item>
                  <Menu.Item key="/blog">{t('blog.name')}
                      <Link to="/blog" getProps={isPartiallyActive("/blog")} {...props}/>
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
                  {menu()}
              </Row>
          </Col>


      </Row>
    );

}
export default(TopAppBar);
