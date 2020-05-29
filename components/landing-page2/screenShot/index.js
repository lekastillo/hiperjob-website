import React from 'react';
import $ from 'jquery';

const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index} className="nav-item iq-r-mb-15">
            <a
                id={item.id}
                className={ item.active ? "nav-link sof-box active1 " : "nav-link sof-box"}
                data-toggle="pill"
                href={'#' + item.href}
                role="tab"
                aria-controls={item.href}
                onClick={() => { tabActive(item.href) }}
            >
                <i className={item.icon} /> { item.title }

            </a>
        </li>
    ));

    return (
        <>
            <ul className="nav nav-pills tabs-left justify-content-center" id="pills-tab2" role="tablist">
                { list }
            </ul>
        </>
    );
};

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    id: 'career-page-tab',
                    href: 'career-page',
                    title: 'Career Page',
                    active: true,
                    icon: 'ion-ios-color-wand-outline'
                },
                {
                    id: 'referreds-tab',
                    href: 'referreds',
                    title: 'Referidos',
                    active: false,
                    icon: 'ion-ios-heart-outline'
                },
                {
                    id: 'movilidad-tab',
                    href: 'movilidad',
                    title: 'Movilidad Interna',
                    active: false,
                    icon: 'ion-ios-settings'
                },
                {
                    id: 'workflow-tab',
                    href: 'workflow',
                    title: 'Workflow de Vacantes',
                    active: false,
                    icon: 'ion-ios-checkmark-outline'
                },
                {
                    id: 'documentos-tab',
                    href: 'documentos',
                    title: 'Documentos y Pre-Onboarding',
                    active: false,
                    icon: 'ion-ios-albums-outline'
                },
                {
                    id: 'swap-tab',
                    href: 'swap',
                    title: 'SWAP',
                    active: false,
                    icon: 'ion-ios-briefcase-outline'
                }
            ]
        }
    }

    render() {
        const { tabs } = this.state;
        return (
            <>
                <div className="overview-block-ptb iq-tab horizontal blue-bg" id="soluciones">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title iq-font-white white">
                                    <h3 className="title iq-tw-7 iq-font-white">Soluciones</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <List tabs={tabs} />

                                <div className="tab-content iq-mt-30">

                                    <div className="tab-pane active" id="career-page">
                                        <div className="row">
                                            <div className="col-lg-12  col-md-12 text-center align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">Career Page - Trabaja con Nosotros</h3>
                                                <p className="iq-mt-30 iq-font-white">Plataforma que permite recepcionar postulantes externos, con un atractivo y moderno diseño que logra mejorar la experiencia de candidato y transmitirá la propuesta de valor de la compañía.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="referreds">
                                        <div className="row">
                                            <div className="col-lg-12  col-md-12 text-center align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">Plataforma de Referidos</h3>
                                                <p className="iq-mt-30 iq-font-white">Plataforma que permite digitalizar el proceso de referidos, permitiendo el tracking de candidatos y con un sistema de gamification.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="movilidad">
                                        <div className="row flex-row-reverse">
                                            <div className="col-lg-12  col-md-12 text-center align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">Plataforma de Movilidad Interna</h3>
                                                <p className="iq-mt-30 iq-font-white">Plataforma que permite a los colaboradores de la empresa postular a oportunidades de desarrollo de carrera dentro de la compañía.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="workflow">
                                        <div className="row">
                                            <div className="col-lg-12  col-md-12 text-center align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">Aprobación y Solicitud de Vacantes</h3>
                                                <p className="iq-mt-30 iq-font-white">Plataforma que permite automatizar y digitalizar el flujo de aprobaciones de vacantes, integrando a diferentes stakeholders de la organización.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="documentos">
                                        <div className="row">
                                            <div className="col-lg-12  col-md-12 text-center align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">Gestión Documental y Pre-Onboarding</h3>
                                                <p className="iq-mt-30 iq-font-white">Plataforma que permite solicitar documentos de forma digital para candidatos contratados y entregar información útil previo al primer día de trabajo.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="swap">
                                        <div className="row">
                                            <div className="col-lg-12  col-md-12 text-center align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">Plataforma de Outplacemente e Intercambio Profesional</h3>
                                                <p className="iq-mt-30 iq-font-white">Plataforma que permite ayudar a los colaboradores que dejan la compañía, que sean recomendables para ser contratados por otras empresas. Además, podrás intercambiar talento con otras organizaciones.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }

}

export default Index;