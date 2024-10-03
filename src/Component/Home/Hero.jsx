import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/effect-fade'; // Effect Fade styles

// Import your custom styles
import "../../assets/css/vendor/vendor.min.css";
import "../../assets/css/plugins/plugins.min.css";
import "../../assets/css/style.min.css";

const HeroSlider = () => {
  return (
    <div className="hero-slider-section">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        effect="fade"
        speed={1500}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide>
          <div className="hero-single-slider-item">
            <div className="hero-slider-bg">
              <img src="assets/images/hero-slider/home-1/hero-slider-1.jpg" alt="" />
            </div>
            <div className="hero-slider-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-auto">
                    <div className="hero-slider-content">
                      <h4 className="subtitle">New collection</h4>
                      <h2 className="title">Best Of NeoCon <br /> Gold Award</h2>
                      <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-single-slider-item">
            <div className="hero-slider-bg">
              <img src="assets/images/hero-slider/home-1/hero-slider-2.jpg" alt="" />
            </div>
            <div className="hero-slider-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-auto">
                    <div className="hero-slider-content">
                      <h4 className="subtitle">New collection</h4>
                      <h2 className="title">Luxy Chairs <br /> Design Award</h2>
                      <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Pagination and Navigation */}
        <div className="swiper-pagination active-color-golden"></div>
        <div className="swiper-button-prev d-none d-lg-block"></div>
        <div className="swiper-button-next d-none d-lg-block"></div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
