import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../Context/context";

const SingleHead = ({
  handleAddToCart,
  handleAddToLiked,
  notify,
  likeNotify,
}) => {
  const { data } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1); // State for quantity

  // Ensure that `data` and `data.images` exist
  if (!data || !data.images) {
    return <div>Loading...</div>;
  }

  


  return (
    <div>
      <div className="product-details-section">
        <div className="container">
          <div className="row">
            {/* Product Image Section */}
            <div className="col-xl-5 col-lg-6">
              <div
                className="product-details-gallery-area"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                {/* Large Image Section */}
                <div className="product-large-image product-large-image-horaizontal swiper-container">
                  <div className="swiper-wrapper">
                    {data.images.map((item, index) => (
                      <div
                        key={index}
                        className="product-image-large-image swiper-slide zoom-image-hover img-responsive"
                      >
                        <img src={item} alt={`Product Image ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Thumbnail Image Section */}
                <div className="product-image-thumb product-image-thumb-horizontal swiper-container pos-relative mt-5">
                  <div className="swiper-wrapper">
                    {data.images.map((item, index) => (
                      <div
                        key={index}
                        className="product-image-thumb-single swiper-slide"
                      >
                        <img
                          className="img-fluid"
                          src={item}
                          alt={`Thumbnail Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Arrows for image navigation */}
                  <div className="gallery-thumb-arrow swiper-button-next"></div>
                  <div className="gallery-thumb-arrow swiper-button-prev"></div>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="col-xl-7 col-lg-6">
              <div
                className="product-details-content-area product-details--golden"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Product Info */}
                <div className="product-details-text">
                  <h4 className="title">{data.name}</h4>
                  <div className="d-flex align-items-center">
                    <ul className="review-star">
                      <li className="fill"><i className="ion-android-star"></i></li>
                      <li className="fill"><i className="ion-android-star"></i></li>
                      <li className="fill"><i className="ion-android-star"></i></li>
                      <li className="fill"><i className="ion-android-star"></i></li>
                      <li className="empty"><i className="ion-android-star"></i></li>
                    </ul>
                    <Link to="#" className="customer-review ml-2">(customer review)</Link>
                  </div>
                  <div className="price">${data.price}</div>
                  <p>{data.description}</p>
                </div>

                {/* Product Options */}
                <div className="product-details-variable">
                  <h4 className="title">Available Options</h4>
                  <div className="variable-single-item">
                    <div className="product-stock">
                      <span className="product-stock-in"><i className="ion-checkmark-circled"></i></span>
                      {data.stock} IN STOCK
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="variable-single-item">
                      <span>Quantity</span>
                      <div className="product-variable-quantity">
                        <input
                          min="1"
                          max="100"
                          value={quantity}
                          type="number"
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="product-add-to-cart-btn">
                      <Link
                        onClick={() => {
                          handleAddToCart({ ...data, quantity });
                          notify();
                        }}
                        className="btn btn-block btn-lg btn-black-default-hover"
                        data-bs-toggle="modal"
                        data-bs-target="#modalAddcart"
                      >
                        + Add To Cart
                      </Link>
                    </div>
                  </div>

                  {/* Wishlist and Compare */}
                  <div className="product-details-meta mb-20">
                    <Link
                      onClick={() => {
                        handleAddToLiked(data);
                        likeNotify();
                      }}
                      className="icon-space-right"
                    >
                      <i className="icon-heart"></i> Add to wishlist
                    </Link>
                    <Link className="icon-space-right">
                      <i className="icon-refresh"></i> Compare
                    </Link>
                  </div>
                </div>

                {/* Product Categories */}
                <div className="product-details-catagory mb-2">
                  <span className="title">CATEGORIES:</span>
                  <ul>
                    <li>
                      <Link to="#">{data.category}</Link>
                    </li>
                  </ul>
                </div>

                {/* Share Product */}
                <div className="product-details-social">
                  <span className="title">SHARE THIS PRODUCT:</span>
                  <ul>
                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHead;
