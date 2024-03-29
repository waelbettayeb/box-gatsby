import React, { useState } from "react"
import TweenOne from 'rc-tween-one';
import { Menu, Row } from "antd"
import { getChildrenToRender } from './utils';
import { dataSource } from './dataSource'
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import CompanyImage from "./CompanyImage"
import './less/nav3.less'
import { withTranslation } from "react-i18next"

const { Item, SubMenu } = Menu;

class NavigationMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      key:"/"
    };
  }
  handleClick  = e => {
    this.setState({key: e.key});
  };
  isPartiallyActive = to => (({ isPartiallyCurrent}) => {
    // if(isPartiallyCurrent)
      // this.setState({key: to});
  })
  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      // if (subItem) {
      //   return (
      //     <SubMenu
      //       key={item.name}
      //       {...itemProps}
      //       title={
      //         <div
      //           {...a}
      //           className={`header3-item-block ${a.className}`.trim()}
      //         >
      //           {a.children.map(getChildrenToRender)}
      //         </div>
      //       }
      //       popupClassName="header3-item-child"
      //     >
      //       {subItem.map(($item, ii) => {
      //         const { children: childItem } = $item;
      //         const child = childItem.href ? (
      //           <a {...childItem}>
      //             {childItem.children.map(getChildrenToRender)}
      //           </a>
      //         ) : (
      //           <div {...childItem}>
      //             {childItem.children.map(getChildrenToRender)}
      //           </div>
      //         );
      //         return (
      //           <Item key={$item.key || ii.toString()} {...$item}>
      //             {child}
      //           </Item>
      //         );
      //       })}
      //     </SubMenu>
      //   );
      // }
      return (
        <Item key={item.key} {...itemProps}>
          {this.props.t(item.name+'.name')}
          <Link to={item.key} getProps={this.isPartiallyActive(item.key)} {...props}/>
          {/*<a {...a} className={`header3-item-block ${a.className}`.trim()}>*/}
          {/*  {a.children.map(getChildrenToRender)}*/}
          {/*</a>*/}
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <CompanyImage/>

          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                  x: 0,
                  height: 0,
                  duration: 300,
                  onComplete: (e) => {
                    if (this.state.phoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={this.state.key}
              theme="light"
              onClick={this.handleClick}
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default withTranslation('common')(NavigationMenu);
