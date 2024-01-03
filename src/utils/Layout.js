import React, { useState } from "react";
import NavMenu from "../components/navMenu";
import Logo from "../assets/images/logo.png";
import LogoFooter from "../assets/images/logo_footer.png";
import Footer from "../components/footer";
import "./Layout.css";
import SubscriptionNewsLetter from "../Screens/Home/Components/SubscriptionNewsLetter";
import QuartzDropdown from "../components/quatzDropdown";
import {Link, useLocation} from 'react-router-dom'
function Layout({ children }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation()
  return (
    <div>
      <div className="layout-container">
        <Link to='/'>
          {
            location.pathname === '/where-to-buy' ? <img src={LogoFooter} alt="LogoFooter" /> : <img src={Logo} alt="Logo" />
          }
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
