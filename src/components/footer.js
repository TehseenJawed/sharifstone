import React from "react";
import Logo from "../assets/images/logo_footer.png";
import { ImLocation } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { TbPhoneFilled, TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import BgImage from '../assets/images/bg_S.png'
import "./footer.css";
function Footer() {
  const company = [
    {
      name: "About Us",
      route: "/",
    },
    {
      name: "One Way",
      route: "/",
    },
    {
      name: "Terms of Use",
      route: "/",
    },
    {
      name: "Privacy Policy",
      route: "/",
    },
  ];

  const product = [
    {
      name: "Kitchen",
      route: "/",
    },
    {
      name: "Bathroom",
      route: "/",
    },
    {
      name: "Outdoor",
      route: "/",
    },
    {
      name: "Living Rooms",
      route: "/",
    },
  ];

  const personal = [
    {
      name: "Coming Soon",
      route: "/",
    },
    {
      name: "Marketplace",
      route: "/",
    },
  ];
  return (
    <div className="footer-container">
      <img className="footer-bgimage" src={BgImage} alt={'alt'} />
      <div className="footer-innercontainer">
        <img src={Logo} alt="logo" />
        <div className="footer-container-links">
          <div className="footer-innersection">
            <div>Contact Us</div>
            <div className="footer-column">
              <div className="footer-contacticon-container">
                <TiLocation size={23} color={"#EE2A2E"} />
                <div>2440 Dinneed Ave. Orlando, FL 32804</div>
              </div>
              <div className="footer-contacticon-container">
                <TbPhoneFilled size={23} color={"#EE2A2E"} />
                <div>(407) 286-4677</div>
              </div>
              <div className="footer-contacticon-container">
                <TbMailFilled size={23} color={"#EE2A2E"} />
                <div>info@sharifstone.com</div>
              </div>
            </div>
          </div>

          <div className="footer-innersection">
            <div>Company</div>
            <div className="footer-column">
              {company.map((v, i) => (
                <Link className="footer-link">{v.name}</Link>
              ))}
            </div>
          </div>

          <div className="footer-innersection">
            <div>Products</div>
            <div className="footer-column">
              {product.map((v, i) => (
                <Link className="footer-link">{v.name}</Link>
              ))}
            </div>
          </div>

          <div className="footer-innersection">
            <div>Personal</div>
            <div className="footer-column">
              {personal.map((v, i) => (
                <Link className="footer-link">{v.name}</Link>
              ))}
            </div>
          </div>

          <div className="footer-innersection">
            <div>Access</div>
            <div className="footer-column">
              <Link className="footer-link">Sign In</Link>
            </div>
          </div>
        </div>

        <div className="foolter-endsection">
            <div className="footer-copyright">
              Copyright @2023 Sharifstone
            </div>
            <div className="footer-socialmedia">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>youtube</span>
                <span>linkedin</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
