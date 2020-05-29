import React from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <section id="porque-elegir-hiperjob" className="overview-block-ptb grey-bg main-service-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">¿Por qué elegir HiperJob?</h3>
                                    <p>Puedes implementar la solución que necesites, sin necesidad de adquirirlas todas! Ahorra en comparación con otras soluciones.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <img src="./static/assets/images/choose.jpg" className="img-fluid" alt="#" />
                            </div>
                            <div className="col-lg-5 col-md-12 left-img">
                                <div className="media service-box">
                                    <i aria-hidden="true" className="ion-ios-pie-outline" />
                                    <div className="media-body">
                                        <h5 className="iq-tw-7 mt-0">Integración</h5>
                                        Te damos la oportunidad de integrarte con diferentes plataformas de empleo, test en línea y otras plataformas de gestión. Tenemos una API libre.
                                    </div>
                                </div>
                                <div className="media service-box">
                                    <i aria-hidden="true" className="ion-ios-grid-view-outline" />
                                    <div className="media-body">
                                        <h5 className="iq-tw-7 mt-0">Notificaciones Automáticas</h5>
                                        Mejora la comunicación con tus candidatos y stakeholders con notificaciones automáticas en todos los procesos.
                                    </div>
                                </div>
                                <div className="media service-box">
                                    <i aria-hidden="true" className="ion-ios-monitor-outline" />
                                    <div className="media-body">
                                        <h5 className="iq-tw-7 mt-0">Transformación Digital</h5>
                                        Aporta al proceso de transformación digital en recursos humanos y genera insights de people analytics.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }

}

export default Index;