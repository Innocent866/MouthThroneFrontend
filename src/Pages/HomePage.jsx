import React from "react";
import "../assets/css/vendor/vendor.min.css";
import "../assets/css/plugins/plugins.min.css";
import "../assets/css/style.min.css";
import { Link } from "react-router-dom";
import insta1 from "../assets/images/instagram/instagram-1.jpg";
import insta2 from "../assets/images/instagram/instagram-2.jpg";
import insta3 from "../assets/images/instagram/instagram-3.jpg";
import insta4 from "../assets/images/instagram/instagram-4.jpg";
import insta5 from "../assets/images/instagram/instagram-5.jpg";
import insta6 from "../assets/images/instagram/instagram-6.jpg";
import banner1 from "../assets/images/banner/banner-style-4-img-1.jpg";
import banner2 from "../assets/images/banner/banner-style-4-img-2.jpg";
import banner3 from "../assets/images/banner/banner-style-4-img-3.jpg";
import banner4 from "../assets/images/banner/banner-style-4-img-4.jpg";
import modern from "../assets/images/banner/banner-style-3-img-1.jpg";
import promo1 from "../assets/images/icons/service-promo-1.png";
import promo2 from "../assets/images/icons/service-promo-2.png";
import promo3 from "../assets/images/icons/service-promo-3.png";
import promo4 from "../assets/images/icons/service-promo-4.png";
import style1 from "../assets/images/banner/banner-style-1-img-1.jpg";
import style2 from "../assets/images/banner/banner-style-2-img-2.jpg";
import style3 from "../assets/images/banner/banner-style-2-img-2.jpg";
import style4 from "../assets/images/banner/banner-style-2-img-3.jpg";
import style5 from "../assets/images/banner/banner-style-2-img-4.jpg";
import HeroSlider from "../Component/HomeComponent/HeroSlider";
import HomeProduct from "../Component/HomeComponent/HomeProduct";
import HomeBessSell from "../Component/HomeComponent/HomeBessSell";
// import HomeProduct from "../Component/HomeComponent/HomeBestSell";
// import HomeBestSell from "../Component/HomeComponent/HomeBestSell";

const HomePage = () => {
  return (
    <div>
      {/* Start Hero Slider Section*/}
      <HeroSlider />
      {/* End Hero Slider Section*/}

      {/* Start Service Section */}
      <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
          <div className="container">
            <div className="row">
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <img src={promo1} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">FREE SHIPPING</h6>
                    <p>
                      Get 10% cash back, free shipping, free returns, and more
                      at 1000+ top retailers!
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="image">
                    <img src={promo2} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">30 DAYS MONEY BACK</h6>
                    <p>
                      100% satisfaction guaranteed, or get your money back
                      within 30 days!
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="image">
                    <img src={promo3} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">SAFE PAYMENT</h6>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
              {/* Start Service Promo Single Item */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="image">
                    <img src={promo4} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">LOYALTY CUSTOMER</h6>
                    <p>
                      Card for the other 30% of their purchases at a rate of 1%
                      cash back.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Promo Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Service Section */}

      {/* Start Banner Section */}
      <div className="banner-section section-top-gap-100 section-fluid">
        <div className="banner-wrapper">
          <div className="container-fluid">
            <div className="row mb-n6">
              <div className="col-lg-6 col-12 mb-6">
                {/* Start Banner Single Item */}
                <div
                  className="banner-single-item banner-style-1 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <img src={style1} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Mini rechargeable Table Lamp - E216
                    </h4>
                    <h5 className="sub-title">We design your home</h5>
                    <Link
                      to="product-details-default.html"
                      className="btn btn-lg btn-outline-golden icon-space-left"
                    >
                      <span className="d-flex align-items-center">
                        discover now{" "}
                        <i className="ion-ios-arrow-thin-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* End Banner Single Item */}
              </div>

              <div className="col-lg-6 col-12 mb-6">
                <div className="row mb-n6">
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image">
                        <img src={style2} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Kitchen <br />
                          utensils
                        </h4>
                        <Link
                          to="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image">
                        <img src={style3} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Sofas and <br />
                          Armchairs
                        </h4>
                        <Link
                          to="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image">
                        <img src={style4} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Chair & Bar
                          <br />
                          stools
                        </h4>
                        <Link
                          to="product-details-default.html"
                          className="link-text"
                        >
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                  {/* Start Banner Single Item */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image">
                        <img src={style5} alt="" />
                      </div>
                      <div className="content">
                        <h4>
                          Interior <br />
                          lighting
                        </h4>
                        <Link to="product-details-default.html">
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Banner Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner Section */}

      {/* Start Product Default Slider Section */}
      <HomeProduct />
      {/* End Product Default Slider Section */}

      {/* Start Banner Section */}
      <div className="banner-section section-top-gap-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              {/* Start Banner Single Item */}
              <div
                className="banner-single-item banner-style-3 banner-animation img-responsive"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="image">
                  <img className="img-fluid" src={modern} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Modern Furniture Basic Collection</h3>
                  <h5 className="sub-title">
                    We design your home more beautiful
                  </h5>
                  <Link
                    to="product-details-default.html"
                    className="btn btn-lg btn-outline-golden icon-space-left"
                  >
                    <span className="d-flex align-items-center">
                      discover now <i className="ion-ios-arrow-thin-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              {/* End Banner Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Banner Section */}

      {/* Start Product Default Slider Section */}
      <HomeBessSell />
      {/* end Product Default Slider Section */}

      {/* Start Banner Section */}
      <div className="banner-section">
        <div className="banner-wrapper clearfix">
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="image">
              <img className="img-fluid" src={banner1} alt="" />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Bar Stool</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* End Banner Single Item */}
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="image">
              <img className="img-fluid" src={banner2} alt="" />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Armchairs</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* End Banner Single Item */}
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="image">
              <img className="img-fluid" src={banner3} alt="" />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">lighting</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* End Banner Single Item */}
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="image">
              <img className="img-fluid" src={banner4} alt="" />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Easy chairs</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* End Banner Single Item */}
        </div>
      </div>
      {/* End Banner Section */}

      {/* Start Instagramr Section */}
      <div className="instagram-section section-top-gap-100 section-inner-bg">
        <div
          className="instagram-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instagram-box">
                  <div id="instagramFeed" className="instagram-grid clearfix">
                    <Link
                      to="https://www.instagram.com/p/CCFOZKDDS6S/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src={insta1} alt="" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOYDNjWF5/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src={insta2} alt="" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOXH6D-zQ/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src={insta3} alt="" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOVcrDDOo/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src={insta4} alt="" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOUajjABP/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src={insta5} alt="" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOS2MDmjj/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img src={insta6} alt="" />
                    </Link>
                  </div>
                  <div className="instagram-link">
                    <h5>
                      <Link
                        to="https://www.instagram.com/myfurniturecom/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HONOTEMPLATE
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Instagramr Section */}
    </div>
  );
};

export default HomePage;
