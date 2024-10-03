import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Import modules directly
import img1 from "../../assets/images/hero-slider/home-1/hero-slider-1.jpg"
import img2 from "../../assets/images/hero-slider/home-1/hero-slider-2.jpg"
import imgSlider1 from "../../../../../../../Pictures/mr terri1.jpg";
import imgSlider2 from "../../../../../../../Pictures/mr terri2.jpg";

const HeroSlider = () => {
    return (
        <div className="hero-slider-section">
            <Swiper
                className="hero-slider-active"
                modules={[Navigation, Pagination]} // Use modules prop to register modules
                slidesPerView={1}
                effect="fade"
                speed={2000}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true} // Enable navigation buttons automatically
            >
                {/* Start Hero Single Slider Item */}
                <SwiperSlide className="hero-single-slider-item">
                    <div className="hero-slider-bg">
                        <img src={imgSlider1} alt="" className='w-50'/>
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
                </SwiperSlide>
                {/* End Hero Single Slider Item */}

                {/* Start Hero Single Slider Item */}
                <SwiperSlide className="hero-single-slider-item">
                    <div className="hero-slider-bg">
                        <img src={imgSlider2} alt="" className='w-50' />
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
                </SwiperSlide>
                {/* End Hero Single Slider Item */}
            </Swiper>

            {/* Pagination */}
            <div className="swiper-pagination active-color-golden"></div>

            {/* Navigation buttons (no need to specify if `navigation={true}` is set) */}
            {/* <div className="swiper-button-prev d-none d-lg-block"></div>
            <div className="swiper-button-next d-none d-lg-block"></div> */}
        </div>
    );
};

export default HeroSlider;
