import React from "react";
import NavMenu from "../components/navMenu";
import Logo from "../assets/images/logo.png";
import Footer from "../components/footer";
import "./Layout.css";
import SubscriptionNewsLetter from "../Screens/Home/Components/SubscriptionNewsLetter";

function Layout({ children }) {
  return (
    <div>
      <div className="layout-container">
        <img src={Logo} alt="Logo" />
        <NavMenu />
      </div>
      {children}
      <SubscriptionNewsLetter />
      <Footer />
    </div>
  );
}

export default Layout;
