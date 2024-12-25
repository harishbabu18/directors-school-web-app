import React from "react";
import './../assets/vendor/bootstrap/css/bootstrap.min.css';
import './../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './../assets/vendor/aos/aos.css';
import './../assets/vendor/glightbox/css/glightbox.min.css';
import './../assets/vendor/swiper/swiper-bundle.min.css';
import './../assets/css/main.css';
import Header from "./Header";
import Footer from "./Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
      </>
  )
}