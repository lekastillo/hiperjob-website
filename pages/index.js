import React from 'react';
import Head from 'next/head';

// Import for custom styles...
import '../static/style.css';

// Import asset...

// Import for the custom plugins...
import Home from '../components/landing-page2/home';
import FancyCard from '../components/landing-page2/fancyCard';
import About from '../components/landing-page2/about';
import Services from '../components/landing-page2/services';
import ScreenShot from '../components/landing-page2/screenShot';
import AboutApp from '../components/landing-page2/aboutApp';
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
                { href: '#iq-home', title: 'Inicio' },
                { href: '#how-it-works', title: 'Acerca de' },
                { href: '#software-features', title: 'Servicios' },
                { href: '#great-screenshots', title: 'Screenshots' },
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
                    <title>Sofbox - Responsive Software Landing Page</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Sofbox - Responsive Software Landing Page" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./static/assets/images/favicon.ico" />
                </Head>


                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle1
                    className={""}
                    navItems={menu}
                    logoImg={logoImg}
                    buttonSection={(<a className={"button bt-black pull-right"} href="#">Contacto</a>)}
                />


                {/* Home section*/}
                <Home />


                <div className="main-content">
                    {/* Fancy card section */}
                    <FancyCard />

                    {/* About section */}
                    <About />

                    {/* Services section */}
                    <Services />

                    {/* ScreenShot section */}
                    <ScreenShot />

                    {/* About App section */}
                    <AboutApp />

                    {/* Client carousal section */}
                    <Clients />

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