import * as React from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/static/Logo-Icon.webp" />
    </Head>
    <Header/>
        <main>{children}</main>
    <Footer />
    </>
  );
};

export default Layout;
