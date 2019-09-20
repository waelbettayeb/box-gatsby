import React, {useEffect, useState} from 'react';
import {bool, func, number, oneOf, oneOfType, string} from 'prop-types';
import {Button, Drawer} from 'antd';
import throttle from 'lodash.throttle';

const ResponsiveAntMenu = (props) => {
    const {
        children: MenuMarkup, activeLinkKey, menuClassName: className,
        theme, mode, mobileMenuContent, placement, popoverTrigger,
        throttleViewportChange, mobileBreakPoint, closeOnClick, mobileMode
    } = props;

    const [viewportWidth, setViewportWidth] = useState(0);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const isMobile = () => viewportWidth < mobileBreakPoint;
    const onLinkClick = () => () => isMobile() && closeOnClick ? setIsMenuShown(false) : null;

    useEffect(() => {
        setViewportWidth(window.innerWidth);
        const throttledSetViewPortWidth = throttle(() => setViewportWidth(window.innerWidth), throttleViewportChange);
        window.addEventListener('resize', throttledSetViewPortWidth);

        return () => window.removeEventListener('resize', throttledSetViewPortWidth);
    }, []);

    const MenuMarkupConfig = {
        theme: !theme ? 'light' : typeof theme === 'function' ? theme(isMobile()) : theme,
        mode: !mode ? 'horizontal' : typeof mode === 'function' ? mode(isMobile()) : mode,
        selectedKeys: [`${activeLinkKey}`],
        className,
    };
    if(isMobile())
        MenuMarkupConfig.mode = mobileMode;
    const menuToRender = React.cloneElement(MenuMarkup(onLinkClick()), MenuMarkupConfig);

    const showDrawer = () => {
        setIsMenuShown(true)

    };
    const closeDrawer = () => {
        setIsMenuShown(false)

    };
    const onClose = () => {
        setIsMenuShown(false)
    };

    return false ?
        <div>
            <Button type="link" onClick={showDrawer}>
                {mobileMenuContent(isMenuShown)}
            </Button>
            <Drawer
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={isMenuShown}
            >
                <Button type="link" onClick={onClose}>
                    {mobileMenuContent(closeDrawer)}
                </Button>
                {menuToRender}
            </Drawer>

        </div>
        : menuToRender;
};


ResponsiveAntMenu.propTypes = {
    children: func.isRequired,
    mobileBreakPoint: number,
    closeOnMobileLinkClick: bool,
    throttleViewportChange: number,
    activeLinkKey: string,
    placement: string,
    theme: func,
    mode: oneOfType([
        func,
        string
    ]),
    mobileMenuContent: func.isRequired,
    menuClassName: string,
    popoverTrigger: oneOf(['click', 'hover', 'focus']),
    mobileMode: oneOf(['horizontal', 'vertical', 'inline'])
};

ResponsiveAntMenu.defaultProps = {
    mobileBreakPoint: 575,
    throttleViewportChange: 250,
    placement: 'top',
    closeOnClick: true,
    popoverTrigger: 'click',
    mobileMode: 'inline'
};

export default ResponsiveAntMenu;
