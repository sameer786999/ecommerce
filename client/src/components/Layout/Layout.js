import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import {Helmet} from 'react-helmet'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <>
      <Helmet>
        <div>
          <meta charset="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </div>
      </Helmet>
      <Header />

      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />
        {children}
      </main>

      <Footer></Footer>
    </>
  );
}

Layout.defaultProps={
  title:"Ecommerce-App,shop now",
  description:"mern stack",
  keywords:"mern ,react,node,express",
  author:"Sameer Shaikh"
}

export default Layout
