import React from "react";
import NavMenu from "../components/navMenu";
import Logo from "../assets/images/logo.png";
import Footer from "../components/footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div>
      <div className="layout-container">
        <img src={Logo} alt="Logo" />
        <NavMenu />
      </div>
        {children}
      <Footer />
    </div>
  );
}

export default Layout;
