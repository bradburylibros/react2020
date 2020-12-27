import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Navbar/>
      {props.children}
	  <Footer/>
    </>
  );
}