import React from 'react'
import { Link } from 'react-router-dom'
import aboutFirstImg from "../assets/images/about/img-about.jpg"
import aboutIcon from "../assets/images/icons/icon_about1.jpg"
import aboutIcon2 from "../assets/images/icons/icon_about2.jpg"
import aboutIcon3 from "../assets/images/icons/icon_about3.jpg"
import aboutIcon4 from "../assets/images/icons/icon_about4.jpg"
import webDesigner from "../assets/images/team/leader1.png"
import ceo from "../assets/images/team/leader2.png"
import chife from "../assets/images/team/leader3.png"
import cto from "../assets/images/team/leader4.png"
import img1 from "../assets/images/company-logo/company-logo-1.png"
import img2 from "../assets/images/company-logo/company-logo-2.png"
import img3 from "../assets/images/company-logo/company-logo-3.png"
import img4 from "../assets/images/company-logo/company-logo-4.png"
import img5 from "../assets/images/company-logo/company-logo-5.png"
import img6 from "../assets/images/company-logo/company-logo-6.png"
import img7 from "../assets/images/company-logo/company-logo-7.png"
import img8 from "../assets/images/company-logo/company-logo-8.png"

const About = () => {
  return (
    <div>
    

    {/* Start Offcanvas Search Bar Section */}
    <div id="search" className="search-modal">
        <button type="button" className="close">×</button>
        <form>
            <input type="search" placeholder="type keyword(s) here" />
            <button type="submit" className="btn btn-lg btn-golden">Search</button>
        </form>
    </div>
    {/* End Offcanvas Search Bar Section */}

    {/* Offcanvas Overlay */}
    <div className="offcanvas-overlay"></div>

    {/* ...:::: Start Breadcrumb Section:::... */}
    <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="breadcrumb-title">About Us</h3>
                        <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                            <nav aria-label="breadcrumb">
                                <ul>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li className="active" aria-current="page">About Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> {/* ...:::: End Breadcrumb Section:::... */}

    {/* Start About Top */}
    <div className="about-top">
        <div className="container">
            <div className="row d-flex align-items-center justify-content-between d-sm-column">
                <div className="col-md-6">
                    <div className="about-img" data-aos="fade-up" data-aos-delay="0">
                        <div className="img-responsive">
                            <img src={aboutFirstImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="title">ABOUT OUR HONO STORE</h3>
                        <h5 className="semi-title">We believe that every project existing in digital world is a result of an
                            idea and every idea has a cause.</h5>
                        <p>For this reason, our each design serves an idea. Our strength in design is reflected by our
                            name, our care for details. Our specialist won't be afraid to go extra miles just to
                            approach near perfection. We don't require everything to be perfect, but we need them to be
                            perfectly cared for. That's a reason why we are willing to give contributions at best. Not a
                            single detail is missed out under Billey's professional eyes.The amount of dedication and
                            effort equals to the level of passion and determination. Get better, together as one.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End About Top */}

    {/* Start Slill Progress */}
    <div className="progressbar-section section-top-gap-100 section-inner-bg">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="content" data-aos="fade-up" data-aos-delay="0">
                        <h4 className="title">Functionality meets perfection</h4>
                        <p>In today’s day and age, one cannot underestimate the importance of design, the art of
                            creating striking visuals to move and captivate your audience. And as the world becomes more
                            and more digitized with each passing second, the importance of graphic design has been
                            rocketed to the top.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="custom-progress m-t-40">
                        <div className="skill-progressbar" data-aos="fade-up" data-aos-delay="0">
                            <h6 className="font--semi-bold m-b-15">UI/UX</h6>
                            <div className="line-progressbar" data-percentage="75" data-progress-color="#b19361"></div>
                        </div>
                        <div className="skill-progressbar" data-aos="fade-up" data-aos-delay="200">
                            <h6 className="font--semi-bold m-b-15">Ideas</h6>
                            <div className="line-progressbar" data-percentage="86" data-progress-color="#b19361"></div>
                        </div>
                        <div className="skill-progressbar" data-aos="fade-up" data-aos-delay="400">
                            <h6 className="font--semi-bold m-b-15">Design</h6>
                            <div className="line-progressbar" data-percentage="97" data-progress-color="#b19361"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Slill Progress */}

    {/* Start Service Section */}
    <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
            <div className="container">
                <div className="row">
                    {/* Start Service Promo Single Item */}
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up" data-aos-delay="0">
                            <div className="image">
                                <img src={aboutIcon} alt=""/>
                            </div>
                            <div className="content">
                                <h6 className="title">Creative Always</h6>
                                <p>Stay creative with Billey and the huge collection of premade elements, layouts &
                                    effects.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Service Promo Single Item */}
                    {/* Start Service Promo Single Item */}
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="image">
                                <img src={aboutIcon2} alt=""/>
                            </div>
                            <div className="content">
                                <h6 className="title">Express Customization</h6>
                                <p>Easy to install and configure the theme customization in a few clicks with Billey.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End Service Promo Single Item */}
                    {/* Start Service Promo Single Item */}
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up" data-aos-delay="400">
                            <div className="image">
                                <img src={aboutIcon3} alt=""/>
                            </div>
                            <div className="content">
                                <h6 className="title">Premium Integrations</h6>
                                <p>Integrated premium plugins in Billey is the secret weapon for your business to
                                    thrive.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Service Promo Single Item */}
                    {/* Start Service Promo Single Item */}
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up" data-aos-delay="600">
                            <div className="image">
                                <img src={aboutIcon4} alt=""/>
                            </div>
                            <div className="content">
                                <h6 className="title">Real-time Editing</h6>
                                <p>Edit your work and preview the changes on the screen live with advanced page builder.
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

    {/*  Start  Team Section    */}
    <div className="team-section section-top-gap-100 secton-fluid section-inner-bg">
        {/* Start Section Content Text Area */}
        <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-content-gap">
                            <div className="secton-content text-center">
                                <h3 className="section-title">Meet Our Team</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Section Content Text Area */}
        <div className="team-wrapper">
            <div className="container">
                <div className="row mb-n6">
                    <div className="col-xl-3 mb-5">
                        <div className="team-single" data-aos="fade-up" data-aos-delay="0">
                            <div className="team-img">
                                <img className="img-fluid" src={webDesigner} alt=""/>
                            </div>
                            <div className="team-content">
                                <h6 className="team-name font--bold mt-5">Ms. Veronica</h6>
                                <span className="team-title">Web Designer</span>
                                <ul className="team-social pos-absolute">
                                    <li><Link to="#"><i className="ion-social-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-rss"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 mb-5">
                        <div className="team-single" data-aos="fade-up" data-aos-delay="200">
                            <div className="team-img">
                                <img className="img-fluid" src={ceo} alt=""/>
                            </div>
                            <div className="team-content">
                                <h6 className="team-name font--bold mt-5">Missa Santos</h6>
                                <span className="team-title">CEO Founder</span>
                                <ul className="team-social pos-absolute">
                                    <li><Link to="#"><i className="ion-social-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-rss"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 mb-5">
                        <div className="team-single" data-aos="fade-up" data-aos-delay="400">
                            <div className="team-img">
                                <img className="img-fluid" src={chife} alt=""/>
                            </div>
                            <div className="team-content">
                                <h6 className="team-name font--bold mt-5">Missa Santos</h6>
                                <span className="team-title">Chief Officer</span>
                                <ul className="team-social pos-absolute">
                                    <li><Link to="#"><i className="ion-social-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-rss"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 mb-5">
                        <div className="team-single" data-aos="fade-up" data-aos-delay="600">
                            <div className="team-img">
                                <img className="img-fluid" src={cto} alt=""/>
                            </div>
                            <div className="team-content">
                                <h6 className="team-name font--bold mt-5">Lisa Antonia</h6>
                                <span className="team-title">CTO</span>
                                <ul className="team-social pos-absolute">
                                    <li><Link to="#"><i className="ion-social-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="ion-social-rss"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*   End  Team Section   */}

    {/* Start Company Logo Section */}
    <div className="company-logo-section section-top-gap-100 section-fluid">
        <div className="company-logo-wrapper" data-aos="fade-up" data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="company-logo-slider default-slider-nav-arrow">
                            {/* Slider main container */}
                            <div className="swiper-container company-logo-slider">
                                {/* Additional required wrapper */}
                                <div className="swiper-wrapper">
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img1} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img2} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img3} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img4} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img5} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img6} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img7} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                    {/* Start Company Logo Single Item */}
                                    <div className="company-logo-single-item swiper-slide">
                                        <div className="image"><img className="img-fluid"
                                                src={img8} alt=""/></div>
                                    </div>
                                    {/* End Company Logo Single Item */}
                                </div>
                            </div>
                            {/* If we need navigation buttons */}
                            <div className="swiper-button-prev d-none d-md-block"></div>
                            <div className="swiper-button-next d-none d-md-block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Company Logo Section */}

   

    </div>
  )
}

export default About