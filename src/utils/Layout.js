import React, { useState } from "react";
import NavMenu from "../components/navMenu";
import Logo from "../assets/images/logo.png";
import Footer from "../components/footer";
import "./Layout.css";
import SubscriptionNewsLetter from "../Screens/Home/Components/SubscriptionNewsLetter";
import QuartzDropdown from "../components/quatzDropdown";
import {Link} from 'react-router-dom'
function Layout({ children }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="layout-container">
        <Link to='/'>
          <img src={Logo} alt="Logo" />
        </Link>
        <NavMenu navState={{showDropdown, setShowDropdown}} />
      </div>
      {showDropdown && <QuartzDropdown navState={{showDropdown, setShowDropdown}} />}

      {children}
      <SubscriptionNewsLetter />
      <Footer />
    </div>
  );
}

export default Layout;
