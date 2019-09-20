import React from 'react';
import {Col, Icon, Menu, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";
import ResponsiveAntMenu from "../ResponsiveMenu";

const { Title, Paragraph, Text } = Typography;

function TopAppBar(props) {
    const { classes } = props;
    const { t, i18n } = useTranslation('common');
    const menu = pMode =>{
        return <ResponsiveAntMenu
            activeLinkKey={'/'}
            mobileMenuContent={isMenuShown =>  <Icon type="menu" rotate={isMenuShown ? 90 : 0}/>}
            menuClassName={'responsive-ant-menu'}
        >
            {(onLinkClick) =>
                <Menu
                    defaultSelectedKeys={['/']}
                    onClick={props.onClick}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="/">
                        {t('home')}
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="/about">{t('about')}
                        {/*<Link to="/about" />*/}
                    </Menu.Item>
                    <Menu.Item key="/blog">{t('blog')}
                        {/*<Link to="/blog" />*/}
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
