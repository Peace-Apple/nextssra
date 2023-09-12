import React from "react";
import Head from "next/head";
import Layout from "../src/Layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}
