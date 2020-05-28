import React from 'react';


class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <section className="overview-block-ptb white-bg iq-asked">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Preguntas Frecuentes</h3>
                                    <p>Puedes implementar la solución que necesites, sin necesidad de adquirirlas todas! Ahorra en comparación con otras soluciones.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6">
                                <img className="img-fluid center-block" src="./static/assets/images/drive/10.png" alt="drive10"
                                     style={{ zIndex: 9, position: 'relative' }} />
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="iq-accordion">
                                    <div className="iq-accordion accordion-active">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Es muy costoso HiperJob?</a>
                                        <div className="accordion-details">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <img alt="#" className="img-fluid" src={ require('../../../static/assets/images/blog/01.jpg') } />
                                                </div>
                                                <div className="col-sm-9"> Desde 100 USD mensuales puedes acceder a nuestras soluciones.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-accordion">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Ya tengo un ATS, ¿me sirve?</a>
                                        <div className="accordion-details">Si tienes Success Factors, Taleo, Workday o similar podemos ser el gran complemento para mejorar tu solución.

                                        </div>
                                    </div>
                                    <div className="iq-accordion">
                                        <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Puedo configurar según necesidades de mi empresa?</a>
                                        <div className="accordion-details">
                                            <div className="row">
                                                <div className="col-sm-9"> Puedes solicitar modificaciones para ajustarlo a tus necesidades, con pequeños costos extras.
                                                </div>
                                                <div className="col-sm-3">
                                                    <img alt="#" className="img-fluid" src={"./static/assets/images/blog/01.jpg"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iq-objects-asked">
                        <span className="iq-objects-01">
                            <img src={"./static/assets/images/drive/02.png"} alt="drive02" />
                        </span>
                        <span className="iq-objects-02" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
                            <img src={"./static/assets/images/drive/04.png"} alt="drive02" />
                        </span>
                        <span className="iq-objects-03 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </section>

            </>
        );
    }

}

export default Index;