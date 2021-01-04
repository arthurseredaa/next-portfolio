import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import "@/styles/preloader.scss"
import Head from "next/head";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000",
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="icon" href={"/favicon.png"} type="image/png" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
