import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ImList2 } from "react-icons/im";
import Spinner from 'react-bootstrap/Spinner';
import CartContext from "../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import LikedContext from "../Context/LikedContext";

const Product = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToLiked, liked } = useContext(LikedContext);

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

  // const likedAdded = ()=>{
  //   liked.find()
  // }

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "https://mouththrown.onrender.com/api/item/getallproducts"
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      notifyError(); // Show error toast notification
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* Start Shop Section */}
      <div className="shop-section">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-12">
              {/* Start Shop Product Sorting Section */}
              <div className="shop-sort-section">
                <div className="container">
                  <div className="row">
                    <div
                      className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="sort-tablist d-flex align-items-center">
                        <ul className="tablist nav sort-tab-btn">
                          <li>
                            <Link className="nav-link active" data-bs-toggle="tab" href="#layout-4-grid">
                              <ImList2 />
                            </Link>
                          </li>
                        </ul>
                        <div className="page-amount ml-2">
                          <span>Showing 1–9 of 21 results</span>
                        </div>
                      </div>
                      <div className="sort-select-list d-flex align-items-center">
                        <label className="mr-2">Sort By:</label>
                        <form>
                          <fieldset>
                            <select name="sort" id="sort">
                              <option>Sort by average rating</option>
                              <option>Sort by popularity</option>
                              <option>Sort by newness</option>
                              <option>Sort by price: low to high</option>
                              <option>Sort by price: high to low</option>
                            </select>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Product Grid View */}
              <div className="sort-product-tab-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content">
                        <div className="tab-pane active show sort-layout-single" id="layout-4-grid">
                          <div className="row">
                            {isLoading ? (
                              <div className="text-center">
                                <Spinner animation="grow" />
                              </div>
                            ) : (
                              data.map((item) => (
                                <div key={item._id} className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                  <div className="product-default-single-item product-color--golden" data-aos="fade-up" data-aos-delay="0">
                                    <div className="image-box">
                                      <Link to={`/singleproduct/${item._id}`} className="image-link">
                                        <img src={item.images[0]} alt={item.name} />
                                        <img src={item.images[1]} alt={item.name} />
                                      </Link>
                                      <div className="action-link">
                                        <div className="action-link-left" onClick={() =>addToCart(item)}>
                                          <Link to="#">Add to Cart</Link>
                                        </div>
                                        <div className="action-link-right">
                                          <Link to="#">
                                            <i className="icon-magnifier"></i>
                                          </Link>
                                          <Link onClick={()=>addToWishlist(item)}>
                                            <i className="icon-heart"></i>
                                          </Link>
                                          <Link to="#">
                                            <i className="icon-shuffle"></i>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content">
                                      <div className="content-left">
                                        <h6 className="title">
                                          <Link to={`product-details/${item._id}`}>{item.name}</Link>
                                        </h6>
                                        <ul className="review-star">
                                          {Array.from({ length: 5 }, (_, i) => (
                                            <li key={i} className={i < item.rating ? "fill" : "empty"}>
                                              <i className="ion-android-star"></i>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div className="content-right">
                                        <span className="price">${item.price}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Pagination */}
              <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay="0">
                <ul>
                  <li><Link className="active" href="#">1</Link></li>
                  <li><Link to="#">2</Link></li>
                  <li><Link to="#">3</Link></li>
                  <li><Link to="#"><i className="ion-ios-skipforward"></i></Link></li>
                </ul>
              </div>
              {/* End Pagination */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
