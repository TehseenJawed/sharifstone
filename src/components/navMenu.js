import React from "react";
import "./navMenu.css";
import { Link } from "react-router-dom";

function NavMenu() {
  const nav = [
    {
        name: "Home",
        route: '/'
    },
    {
        name: "Quartz Collection",
        route: '/quartz-collection'
    },
    {
        name: "Kitchen Visualizer",
        route: '/kitchen-visualizer',
    },
    {
        name: "About the company",
        route: '/about'
    },
    {
        name: "Warranty and Support",
        route: '/warranty-n-support'
    },
    {
        name: "Contact",
        route: '/contact'
    },
  ];
  return (
    <div style={{display: 'flex'}}>
      <div className="nav-container">
        {nav.map((v, i) => (
          <Link to={v.route} className="nav-item">
            <div className="active-dott" style={{visibility: window.location.pathname === v.route ? '':'hidden'}} />
            {v.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
