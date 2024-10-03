import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../Context/CartContext";
import LikedContext from "../Context/LikedContext";

const LikedItems = () => {
  const notify = () => toast.success("An item has been added");
  const { handleAddToCart } = useContext(CartContext);
  const { liked, removeLiked } = useContext(LikedContext);

  const handleAddItemToCart = (cartItem) => {
    handleAddToCart(cartItem);
    notify();
  };

  return (
    <div>
      {/* ...:::: Start Breadcrumb Section:::... */}
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Liked</h3>
                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li className="active" aria-current="page">
                        Liked
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...:::: End Breadcrumb Section:::... */}

      {/* ...:::: Start Cart Section:::... */}
      <div className="cart-section">
        {/* Start Cart Table */}
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      {/* Start Cart Table Head */}
                      <thead>
                        <tr>
                          <th className="product_remove">Delete</th>
                          <th className="product_thumb">Image</th>
                          <th className="product_name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product_quantity">Stock Status</th>
                          <th className="product_quantity">Add to Cart</th>
                        </tr>
                      </thead>
                      {/* End Cart Table Head */}
                      <tbody>
                        {liked.length === 0 ? (
                          <tr>
                            <td colSpan="6">
                              <h2>You don't like any item</h2>
                            </td>
                          </tr>
                        ) : (
                          liked.map((cartItem) => {
                            const {
                              _id,
                              name,
                              price,
                              images,
                              stock,
                            } = cartItem;

                            return (
                              <tr key={_id}>
                                <td className="product_remove">
                                  <Link onClick={() => removeLiked(_id)}>
                                    <i className="fa fa-trash-o"></i>
                                  </Link>
                                </td>
                                <td className="product_thumb">
                                  <Link to={`/singleproduct/${_id}`}>
                                    <img src={images[0]} alt={name} />
                                  </Link>
                                </td>
                                <td className="product_name">
                                  <Link to={`/singleproduct/${_id}`}>
                                    {name}
                                  </Link>
                                </td>
                                <td className="product-price">${price}</td>
                                <td className="product_quantity">
                                  <label>Quantity</label> {stock}
                                </td>
                                <td className="product_addcart">
                                  <button
                                    onClick={() => handleAddItemToCart(cartItem)}
                                    className="btn btn-md btn-golden"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart"
                                  >
                                    Add To Cart
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Cart Table */}
      </div>
      {/* ...:::: End Cart Section:::... */}
    </div>
  );
};

export default LikedItems;
