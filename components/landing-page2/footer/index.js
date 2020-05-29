import React from 'react';

import { FooterMain, FooterLogo, FooterAddress, FooterLinks } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            footerPlatform: [
                {
                    section: [
                        { href: '#home', title: 'Inicio' },
                        { href: '#soluciones', title: 'Soluciones' },
                        { href: '#porque-elegir-hiperjob', title: '¿Por qué elegir HiperJob?' }
                    ]
                }
            ],
            footerHome1: [
                {
                    section: [
                        { href: '#!', title: 'Chile' },
                        { href: '#!', title: 'Colombia' },
                        { href: '#!', title: 'Argentina' },
                        { href: '#!', title: 'Perú' },
                        { href: '#!', title: 'México' }
                    ]
                }
            ],
            footerHome2: [
                {
                    section: [
                        { href: '#!', title: 'El Salvador' },
                        { href: '#!', title: 'Guatemala' },
                        { href: '#!', title: 'costa Rica' },
                        { href: '#!', title: 'Panamá' }
                    ]
                }
            ],
            footerHome3: [
                {
                    section: [
                        { href: '#!', title: 'Ecuador' },
                        { href: '#!', title: 'Honduras' },
                        { href: '#!', title: 'Nicaragua' },
                        { href: '#!', title: 'Rep. Dominicana' }
                    ]
                }
            ],

            footerText: [
                {
                    icon: true,
                    iconClass: 'ion-ios-location-outline',
                    text: 'Av. Paseo de la Reforma 26, Piso 24, Ciudad de México.'
                },
                {
                    icon: true,
                    iconClass: 'ion-ios-email-outline',
                    text: 'hola@hiperjob.com'
                }
            ]
        }
    }

    render() {
        const { footerHome1, footerHome2, footerHome3, footerText } = this.state;
        return (
            <>
                <FooterMain className={"iq-footerr iq-pt-40 iq-pb-20"}>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 iq-mtb-20">
                            <FooterAddress  addressContent={footerText} addressTitle={""} />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 iq-mtb-20">
                            <FooterLinks title={""} content={footerHome1}  />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 iq-mtb-20">
                            <FooterLinks title={""} content={footerHome2}  />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 iq-mtb-20">
                            <FooterLinks title={""} content={footerHome3}  />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 iq-mtb-20">
                            <span className='widget-title font-bold color-efy iq-font-12'>Síguenos en</span>
                            <br />
                            <ul className='footer-bottom-social'>
                                <li>
                                    <a
                                        href='https://www.linkedin.com/company/firstjobme/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <i className='ion-social-linkedin iq-font-30 iq-font-black'></i>
                                    </a>
                                </li>
                                <li>
                                    <a

                                        href='https://www.youtube.com/channel/UCsczfDcLzndhNcOpB1TJDsQ'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <i className='ion-social-youtube iq-font-30 iq-font-black'></i>
                                    </a>
                                </li>
                                <li>
                                    <a

                                        href='https://www.facebook.com/firstjobCL'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <i className='ion-social-facebook iq-font-30 iq-font-black'></i>
                                    </a>
                                </li>
                                <li>
                                <a

                                href='http://instagram.com/firstjobme'
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                <i className='ion-social-instagram iq-font-30 iq-font-black'></i>
                                </a>
                                </li>
                                <li>
                                    <a

                                        href='https://twitter.com/firstjoblatam'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <i className='ion-social-twitter iq-font-30 iq-font-black'></i>
                                    </a>
                                </li>
                            </ul>
                        
                        </div>

                    </div>
                    <hr />
                    <div className="row iq-mt-20 align-items-center">
                        <div className="col-auto mr-auto">
                            <ul className="link">
                                <li className="d-inline-block img-fluid">
                                    <img className="img-fluid logo_img"
                                        id="logo_img"
                                        src='./static/assets/images/hiperjob_logo.png'
                                        alt="#" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <div className="iq-copyright iq-ml-10 iq-font-12">
                                <a href="/">Hiperjob</a> Todos los derechos reservados.
                            </div>
                        </div>
                    </div>
                </FooterMain>

            </>
        );
    }

}

export default Index;