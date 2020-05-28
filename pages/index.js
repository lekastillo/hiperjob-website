import React from 'react';
import Head from 'next/head';

// Import for custom styles...
import '../static/style.css';

// Import asset...

// Import for the custom plugins...
import Home from '../components/landing-page2/home';
import Faq from '../components/landing-page1/faq';
import Services from '../components/landing-page2/services';
import ScreenShot from '../components/landing-page2/screenShot';
import Clients from "../components/landing-page2/clients";
import Overview from "../components/landing-page2/overview";
import Footer from "../components/landing-page2/footer";

import logoImg from '../static/assets/images/logo.png';
// import { subHeader } from '../constants/menu';


// Import for the Sofbox components...
import { Loader, HeaderStyle1, ScrollTop } from '../components/sofbox';

// Import for the custom plugins...
import { index } from "../config/plugins";

class Index extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            menu: [
                { href: '#home', title: 'Inicio' },
                { href: '#soluciones', title: 'Soluciones' },
                { href: '#porque-elegir-hiperjob', title: '¿Por qué elegir HiperJob?' },
            ]
        };
    }



    componentDidMount(props) {
        setTimeout( () => {
            index();
        }, 500);
    }

    render() {

        const { menu } = this.state;
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>HiperJob - Plataforma de Gestión de Candidatos</title>
                    <meta name="keywords" content="HiperJob, recursos humanos, postulantes, aplciantes, ATS, emplos, gestión aplciantes, vacantes" />
                    <meta name="description" content="HiperJob - Plataforma de Gestión de Candidatos" />
                    <meta name="author" content="https://hiperjobs.com/" />

                    <link rel="shortcut icon" href="./static/assets/images/favicon.ico" />
                </Head>


                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle1
                    className={""}
                    navItems={menu}
                    logoImg={logoImg}
                    buttonSection={(<a className={"button bt-black pull-right"} href="#contacto">Contacto</a>)}
                />


                {/* Home section*/}
                <Home />


                <div className="main-content">
                    {/* Fancy card section 
                        <FancyCard />
                    */}

                    {/* About section 
                        <About />
                    */}

                    {/* ScreenShot section */}
                    <ScreenShot />

                    {/* Services section  */}
                    <Services />

                    {/* Client carousal section */}
                    <Clients />

                    {/* Faq section */}
                    <Faq />

                    {/* Overview section */}
                    <Overview />
                    
                </div>

                {/* Footer section */}
                <Footer />

                {/* Scroll top */}
                <ScrollTop />

            </>
        );
    }
}

export default Index;