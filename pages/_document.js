import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../static/style.css';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body data-spy="scroll" data-offset="80">
                <Main />

                <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument
