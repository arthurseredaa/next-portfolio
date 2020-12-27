import App from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async (context) => {
    const initialProps = App.getInitialProps && await App.getInitialProps(context);
    return {pageProps: {...initialProps.pageProps}}
}

export default MyApp;
