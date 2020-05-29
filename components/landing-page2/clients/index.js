import React from 'react';

import { ClientCarousal } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carousalImages : [
                { src: require('../../../static/assets/images/clientes/CCU.png') },
                { src: require('../../../static/assets/images/clientes/Consorcio.png') },
                { src: require('../../../static/assets/images/clientes/Itau.png') },
                { src: require('../../../static/assets/images/clientes/metl.png') },
                { src: require('../../../static/assets/images/clientes/BAVARIA.png') },
                { src: require('../../../static/assets/images/clientes/L_Oreal.png') },
                { src: require('../../../static/assets/images/clientes/providaafp.png') },
                { src: require('../../../static/assets/images/clientes/SKY.jpg') },
                { src: require('../../../static/assets/images/clientes/Soprole.png') },
                { src: require('../../../static/assets/images/clientes/telus.png') },
                { src: require('../../../static/assets/images/clientes/VTR.png') },
                { src: require('../../../static/assets/images/clientes/Walmart.jpg') }
            ]
        }
    }

    render() {
        const { carousalImages } = this.state;
        return (
            <>
                <div className="iq-our-clients white-bg iq-ptb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Clientes</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row client-images text-center">
                        { carousalImages.map((image) => (
                            <div className="client-logo">
                                <img className="img-fluid center-block" src={image.src} alt="#" />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

            </>
        );
    }

}

export default Index;