import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import LikedContext from "../Context/LikedContext";
import SignleMiddle from "../Component/SignlePage/SignleMiddle";
import { AppContext } from "../Context/context";
import SingleHead from "../Component/SignlePage/SingleHead";
import { Swiper } from "swiper";


const Singleproduct = () => {
  const { id } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToLiked } = useContext(LikedContext);
  const { handleFetch, allData,  } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  // Notifications for adding to cart and wishlist
  const notify = () => toast.success("An item has been added to the cart");
  const likeNotify = () => toast.success("An item has been added to the wishlist");

  // Function to handle adding product to cart
  const addToCart = (product) => {
    setIsLoading(true);
    handleAddToCart(product);
    notify();
    setIsLoading(false);
  };

  // Function to handle adding product to wishlist
  const addToWishlist = (product) => {
    setIsLoading(true);
    handleAddToLiked(product);
    likeNotify();
    setIsLoading(false);
  };

  // Swiper initialization
  useEffect(() => {
    handleFetch(id); // Fetch product details when ID is available
    setIsLoading(false); // Set loading state to false after fetching

    const swiper = new Swiper('.product-default-slider-4grid-1row', {
      loop: true,
      speed: 1000,
      spaceBetween: 25,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 4 },
      },
    },[id, handleFetch]);

    return () => {
      swiper.destroy(); // Cleanup Swiper on component unmount
    };
  }, []);

  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Product Details - Default</h3>
                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li className="active" aria-current="page">Product Details Default</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <SingleHead />
      
      {/* Product Content Tab Section */}
      <SignleMiddle />

      {/* Related Products Section */}
      <div className="product-default-slider-section section-top-gap-100 section-fluid">
        <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">RELATED PRODUCTS</h3>
                    <p>Browse the collection of our related products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-slider-default-1row default-slider-nav-arrow">
                  <div className="swiper-container product-default-slider-4grid-1row">
                    <div className="swiper-wrapper">
                      {/* Start Product Default Single Item */}
                      {isLoading ? (
                        <Spinner animation="border" />
                      ) : (
                        allData?.map((product) => (
                          <div className="product-default-single-item product-color--golden swiper-slide" key={product._id}>
                            <div className="image-box">
                              <Link to={`/product/${product._id}`} className="image-link">
                                <img src={product.images[0]} alt={product.name} />
                                <img src={product.images[1]} alt={product.name} />
                              </Link>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                                <div className="action-link-right">
                                  <button onClick={() => addToWishlist(product)}>
                                    <i className="icon-heart"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title">
                                  <Link to={`/product/${product._id}`}>{product.name}</Link>
                                </h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">${product.price}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                      {/* End Product Default Single Item */}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Default Slider Section */}
    </div>
  );
};

export default Singleproduct;
