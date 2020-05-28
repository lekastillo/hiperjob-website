import React from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1 ids="home" bgImage={"./static/assets/images/bg/01.jpg"} className={"iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}>
                    <div className="container-fluid">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className="text-uppercase iq-font-white iq-tw-3">La Mejor Plataforma para la Estrategia Digital
                                    de <b
                                        className="iq-tw-7">Recursos Humanos</b></h2>
                                    <p className="iq-font-white iq-pt-15 iq-mb-40">HiperJob te permitirá gestionar tus diferentes candidatos, optimizar procesos y mejorar los indicadores del área de atracción de talento.</p>
                                </div>
                                <div className="col-lg-6">
                                    
                                    <img className="banner-img wow bounceInDown" data-wow-duration="2s"
                                         src="./static/assets/images/banner/17.png" alt="" />
                                    <img className="banner-phone img-fluid center-block wow fadeInUp"
                                         src="./static/assets/images/product/mob.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxHeroStyle1>
            </>
        );
    }
}

export default Index;