import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import image1 from "../../assets/images/product/default/home-1/default-3.jpg"
import image2 from "../../assets/images/product/default/home-1/default-5.jpg"
import image3 from "../../assets/images/product/default/home-1/default-4.jpg"
import image4 from "../../assets/images/product/default/home-1/default-6.jpg"
import image5 from "../../assets/images/product/default/home-1/default-7.jpg"
import image6 from "../../assets/images/product/default/home-1/default-8.jpg"

const HomeProduct = () => {
  useEffect(() => {
    // Any additional Swiper configuration can go here if needed.
  }, []);

  const products = [
    {
      id: 1,
      images: [image1, image2],
      title: 'Dolorum fuga eget',
      price: '$71.00',
      rating: 4,
    },
    {
      id: 2,
      images: [image4, image6],
      title: 'Duis pulvinar obortis',
      price: '$75.00',
      originalPrice: '$84.00',
      rating: 4,
      onSale: true,
    },
    {
      id: 3,
      images: [image2, image3],
      title: 'Dolorum fuga eget',
      price: '$90.00',
      rating: 4,
    },
    {
      id: 4,
      images: [image1, image2],
      title: 'Duis pulvinar obortis',
      price: '$86.00',
      rating: 4,
    },
  ];

  return (
    <div className="product-default-slider-section section-top-gap-100 section-fluid">
      <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content-gap">
                <div className="secton-content">
                  <h3 className="section-title">THE NEW ARRIVALS</h3>
                  <p>Preorder now to receive exclusive deals & gifts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className="hero-slider-active swiper-container"
        slidesPerView={1}
        effect="fade"
        speed={1500}
        loop={true}
        autoplay={false}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `<span class="${className}"></span>`,
        }}
        navigation
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-default-single-item product-color--golden">
            <div className="image-box">
              <Link to="product-details-default.html" className="image-link">
                <img src={product.images[0]} alt="" />
                <img src={product.images[1]} alt="" />
              </Link>
              {product.onSale && <div className="tag"><span>sale</span></div>}
              <div className="action-link">
                <div className="action-link-left">
                  <Link to="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">
                    Add to Cart
                  </Link>
                </div>
                <div className="action-link-right">
                  <Link to="#" data-bs-toggle="modal" data-bs-target="#modalQuickview">
                    <i className="icon-magnifier"></i>
                  </Link>
                  <Link to="wishlist.html"><i className="icon-heart"></i></Link>
                  <Link to="compare.html"><i className="icon-shuffle"></i></Link>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="content-left">
                <h6 className="title">
                  <Link to="product-details-default.html">{product.title}</Link>
                </h6>
                <ul className="review-star">
                  {[...Array(5)].map((_, index) => (
                    <li key={index} className={index < product.rating ? 'fill' : 'empty'}>
                      <i className="ion-android-star"></i>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="content-right">
                {product.originalPrice ? (
                  <span className="price">
                    <del>{product.originalPrice}</del> {product.price}
                  </span>
                ) : (
                  <span className="price">{product.price}</span>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default HomeProduct;
