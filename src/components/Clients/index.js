import React from 'react';
import Client from "./Client";
import BottomParallaxSection from "../ParallaxSection/BottomParallaxSection";

import clientImage1 from "../../static/img/client-1.png"
import clientImage2 from "../../static/img/client-2.png"
import clientImage3 from "../../static/img/client-3.png"
import clientImage4 from "../../static/img/client-4.png"
import clientImage5 from "../../static/img/client-5.png"
import {useTranslation} from "react-i18next";

function Clients(props) {
    const {t} = useTranslation('common');
    return (
        <BottomParallaxSection title={t('whoTrustUs')}
                               background={'#ff662b'}
                               textColor={"#ffffff"}>
            <Client src={clientImage1}/>
            <Client src={clientImage2}/>
            <Client src={clientImage3}/>
            <Client src={clientImage4}/>
            <Client src={clientImage5}/>
        </BottomParallaxSection>
    );
}
export default(Clients);
