import App from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import Head from "next/head";
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href={"/favicon.png"} type="image/png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

MyApp.getInitialProps = async (context) => {
    const initialProps = App.getInitialProps && await App.getInitialProps(context);
    return {pageProps: {...initialProps.pageProps}}
}

export default MyApp;
