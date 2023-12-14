import React, { useState, useEffect } from "react";
import "./navMenu.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NavMenu({ navState }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const nav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Quartz Collection",
      route: "/quartz-collection",
    },
    {
      name: "Kitchen Visualizer",
      route: "/kitchen-visualizer",
    },
    {
      name: "About the company",
      route: "/about",
    },
    {
      name: "Warranty and Support",
      route: "/warranty-n-support",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  const dashboard = [
    {
      name: "Create Collection",
      route: "/admin-dashboard/create-collection",
    },
    {
      name: "View Collections",
      route: "/admin-dashboard/collections",
    },
    {
      name: "Create Visualizer",
      route: "/admin-dashboard/create-visualizer",
    },
    {
      name: "View Visualizer",
      route: "/admin-dashboard/visualizer",
    },
  ];

  useEffect(() => {
    if (window.outerWidth <= 768) {
      console.log("TRUE IS WOR<ING");
      setIsMobile(true);
    }
  }, []);
  if (isMobile) {
    return (
      <div>
        <div onClick={() => setOpenMenu(true)} className="mobile-menu-btn">
          <RiMenu3Fill size={30} color={"white"} />
        </div>
        {openMenu && (
          <div className="mobile-menu-container">
            <div className="mobile-remove-menu">
              <RxCross2
                onClick={() => setOpenMenu(false)}
                color={"#fff"}
                size={30}
              />
            </div>
            <div className="mobile-remove-menucontainer">
              <Link
                to={"/"}
                onClick={() => setOpenMenu(false)}
                className="mobile-menu-item"
              >
                Home
              </Link>
              <Link
                to={"/quartz-collection"}
                onClick={() => setOpenMenu(false)}
                className="mobile-menu-item"
              >
                Quartz Collection 
                {/* <MdArrowDropDown color={"#fff"} /> */}
              </Link>
              <Link
                to={"/kitchen-visualizer"}
                onClick={() => setOpenMenu(false)}
                className="mobile-menu-item"
              >
                Kitchen Visualizer
              </Link>
              <Link
                to={"/about"}
                onClick={() => setOpenMenu(false)}
                className="mobile-menu-item"
              >
                About the company
              </Link>
              <Link
                to={"/warranty-n-support"}
                onClick={() => setOpenMenu(false)}
                className="mobile-menu-item"
              >
                Warranty and Support
              </Link>
              <Link
                to={"/contact"}
                onClick={() => setOpenMenu(false)}
                className="mobile-menu-item"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        {window.location.pathname === "/admin-dashboard" ? (
          <div className="nav-container">
            {dashboard.map((v, i) => (
              <Link to={v.route} className="nav-item">
                <div
                  className="active-dott"
                  style={{
                    visibility:
                      window.location.pathname === v.route ? "" : "hidden",
                  }}
                />
                {v.name}
              </Link>
            ))}
          </div>
        ) : (
          <div className="nav-container">
            {nav.map((v, i) => (
              <Link to={v.route} className="nav-item" onMouseOver={v.name === "Quartz Collection" ? () => navState.setShowDropdown(!navState.showDropdown) : () => console.log('')}>
                <div
                  className="active-dott"
                  style={{
                    visibility:
                      window.location.pathname === v.route ? "" : "hidden",
                  }}
                />
                {v.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default NavMenu;
