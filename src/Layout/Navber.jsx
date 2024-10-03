import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Profile from "../Component/Navbar/Profile";
import shopNavImage from "../assets/images/banner/menu-banner.jpg";
import CartContext from "../Context/CartContext";
import LikedContext from "../Context/LikedContext";
import Mobilemodal from "../Component/Navbar/mobilemodal";
import Maquee from "./Maquee";

const Navber = () => {
  const { cart } = useContext(CartContext)
  const { liked } = useContext(LikedContext)
  console.log(cart)
  return (
    <div>
      {/* Start Header Area */}
      <Maquee/>
      <header className="header-section d-none d-xl-block">
        <div className="header-wrapper">
          <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  {/* Start Header Logo */}
                  <div className="header-logo">
                    <div className="logo">
                      <Link to="index.html">
                        <img src="assets/images/logo/logo_black.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  {/* End Header Logo */}

                  {/* Start Header Main Menu */}
                  <div className="main-menu menu-color--black menu-hover-color--golden">
                    <nav>
                      <ul>
                        <li className="has-dropdown">
                          <Link className="active main-menu-link" to="/">
                            Home
                          </Link>{" "}
                        </li>
                        <li className="has-dropdown has-megaitem">
                          <Link to="#">
                            Shop <i className="fa fa-angle-down"></i>
                          </Link>
                          {/* Mega Menu */}
                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <Link to="#" className="mega-menu-item-title">
                                  Shop Layouts
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="shop-grid-sidebar-left.html">
                                      Grid Left Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-grid-sidebar-right.html">
                                      Grid Right Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-full-width.html">
                                      Full Width
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-list-sidebar-left.html">
                                      List Left Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-list-sidebar-right.html">
                                      List Right Sidebar
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <Link to="#" className="mega-menu-item-title">
                                Health and Fitness
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="#">Yoga mats</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Dumbbells</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Fitness trackers</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Protein powders</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Resistance bands</Link>
                                  </li>
                                </ul>
                              </li>
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <Link to="/product" className="mega-menu-item-title">
                                  All Product
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="#">Appliances</Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Phones
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Electronice
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Fashions
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Games
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                    Art works
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <Link to="#" className="mega-menu-item-title">
                                  Brands
                                </Link>
                                <ul className="mega-menu-sub">
                                  <li>
                                    <Link to="#">
                                      Apple
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Adidas
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Binatone
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Intel
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Nivea
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      Neuxe
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="menu-banner">
                              <Link to="#" className="menu-banner-link">
                                <img
                                  className="menu-banner-img"
                                  src={shopNavImage}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li className="has-dropdown">
                          <Link to="#">
                            Pages <i className="fa fa-angle-down"></i>
                          </Link>
                          {/* Sub Menu */}
                          <ul className="sub-menu">
                            <li>
                              <Link to="/faq">Frequently Questions</Link>
                            </li>
                            <li>
                              <Link to="/privatepolicy">Privacy Policy</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* End Header Main Menu Start */}

                  {/* Start Header Action Link */}
                  <ul className="header-action-link action-color--black action-hover-color--golden">
                    <li>
                      <Link
                        to='/likeditems'
                        className="offcanvas-toggle"
                      >
                        <i className="icon-heart"></i>
                        <span className="item-count">{liked.length}</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="offcanvas-toggle">
                        <i className="icon-bag"></i>
                        <span className="item-count">{cart.length}</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#search">
                        <i className="icon-magnifier"></i>
                      </Link>
                    </li>
                    <li>
                      <Profile/>
                    </li>
                    
                  </ul>
                  {/* End Header Action Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Start Header Area */}


      
    {/* Start Mobile Header */}
    <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    {/* Start Mobile Left Side */}
                    <div className="mobile-header-left">
                        <ul className="mobile-menu-logo">
                            <li>
                                <Link to="/">
                                    <div className="logo">
                                        <img src="assets/images/logo/logo_black.png" alt=""/>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* End Mobile Left Side */}

                    {/* Start Mobile Right Side */}
                    <div className="mobile-right-side">
                        <ul className="header-action-link action-color--black action-hover-color--golden">
                            <li>
                                <Link to="#search">
                                    <i className="icon-magnifier"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/likeditems" className="offcanvas-toggle">
                                    <i className="icon-heart"></i>
                                    <span className="item-count">{liked.length}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="offcanvas-toggle">
                                    <i className="icon-bag"></i>
                                    <span className="item-count">{cart.length}</span>
                                </Link>
                            </li>
                            <li>
                            <Mobilemodal/>
                            </li>
                        </ul>
                    </div>
                    {/* End Mobile Right Side */}
                </div>
            </div>
        </div>
    </div>
    {/* End Mobile Header */}
    </div>
  );
};

export default Navber;