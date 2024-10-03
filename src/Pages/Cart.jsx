import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, totalPrice, handleIncrease, handleDecrease } =
    useContext(CartContext);
    console.log(cart);
  return (
    <div>
      {/* ...:::: Start Breadcrumb Section:::... */}
      <div class="breadcrumb-section breadcrumb-bg-color--golden">
        <div class="breadcrumb-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3 class="breadcrumb-title">Cart</h3>
                <div class="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <Link to="index.html">Home</Link>
                      </li>
                      <li>
                        <Link to="shop-grid-sidebar-left.html">Shop</Link>
                      </li>
                      <li class="active" aria-current="page">
                        Cart
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* ...:::: End Breadcrumb Section:::... */}
      {/* ...:::: Start Cart Section:::... */}
      <div class="cart-section">
        {/* Start Cart Table */}
        <div class="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="table_desc">
                  <div class="table_page table-responsive">
                  <table>
  {/* Start Cart Table Head */}
  <thead>
    <tr>
      <th className="product_remove">Delete</th>
      <th className="product_thumb">Image</th>
      <th className="product_name">Product</th>
      <th className="product-price">Price</th>
      <th className="product_quantity">Quantity</th>
      <th class="product_total">Total</th>      
    </tr>
  </thead>
  {/* End Cart Table Head */}
  <tbody>
    {/* Start Cart Single Item*/}
    {cart.length === 0 ? (
      <tr>
        <td colSpan="6">
          <h2>No items</h2>
        </td>
      </tr>
    ) : (
      cart.map((cartItem) => {
        const { quantity, name, price, _id, images } = cartItem;

        return (
          <tr key={_id}>
            <td className="product_remove">
              <Link onClick={()=>removeItem(_id)}>
                <i className="fa fa-trash-o"></i>
              </Link>
            </td>
            <td className="product_thumb">
              <Link to={`/singleproduct/${_id}`}>
                <img src={images[0]} alt={name} />
              </Link>
            </td>
            <td className="product_name">
              <Link to={`/singleproduct/${_id}`}>{name}</Link>
            </td>
            <td className="product-price">${price}</td>
            <td className="product_quantity">
              <label>Quantity</label>{" "}
              <button onClick={()=>handleDecrease(cartItem)} className="btn mx-2 btn-lg btn-black-default-hover">-</button>
              <input min="1" max="100" value={quantity}/>
              <button onClick={()=>handleIncrease(cartItem)} className="btn mx-2 btn-lg btn-black-default-hover">+</button>
            </td>
            <td class="product_total">{price*quantity}</td>
           
          </tr>
        );
      })
    )}
  </tbody>
</table>

                  </div>
                  <div class="cart_submit">
                    <button class="btn btn-md btn-golden" type="submit">
                      update cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Cart Table */}
        {/* Start Coupon Start */}
        <div class="coupon_area">
          <div class="container">
            <div class="row">
              
              <div class="col-lg-6 col-md-6">
                <div
                  class="coupon_code right"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h3>Cart Totals</h3>
                  <div class="coupon_inner">
                    <div class="cart_subtotal">
                      <p>Subtotal</p>
                      <p class="cart_amount">{totalPrice}</p>
                    </div>
                    <div class="cart_subtotal ">
                      <p>Transportation</p>
                      <p class="cart_amount">
                        <span>Flat Rate:</span> $255.00
                      </p>
                    </div>
                    <Link to="#">Calculate shipping</Link>

                    <div class="cart_subtotal">
                      <p>Total</p>
                      <p class="cart_amount">$215.00</p>
                    </div>
                    <div class="checkout_btn">
                      <Link to="/checkout" class="btn btn-md btn-golden">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Coupon Start */}
      </div>{" "}
      {/* ...:::: End Cart Section:::... */}
    </div>
  );
};

export default Cart;
