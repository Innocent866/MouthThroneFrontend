import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const token = localStorage.getItem("token");

  // Form state to capture user inputs
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [busstop, setBusstop] = useState("");
  const [housenumber, setHousenumber] = useState("");

  // Handle form submission
  
  const handleSubmit = async () => {
    if (!firstname || !lastname || !email || !phone) {
        toast.error("Please fill in all required fields.");
        return;
    }

    const orderData = {
      orderItems: cart.map((item) => ({
        title: item.name,
        description: item.description,
        quantity: item.quantity,
        images: item.images[0],
        price: item.price,
      })),
      recipient: {
        firstname,
        lastname,
        email,
        phonenumber: phone,
      },
      address: {
        city,
        street,
        busstop,
        housenumber,
      },
      totalprice: totalPrice,
    };

    try {
      const response = await axios.post(
        "https://mouththrown.onrender.com/api/order/create",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Order response:", response);
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setCity("");
      setStreet("");
      setBusstop("");
      setHousenumber("");
      toast.success("Order placed successfully!");
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error placing the order:", error);
      alert("An error occurred while placing the order");
      if (cart.length === 0) {
        toast.error(response.response.data.message);
      }
    }
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Checkout</h3>
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
                        Checkout
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="checkout-section">
        <div className="container">
          <div
            className="checkout_form"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row">
              {/* Recipient Details */}
              <div className="col-lg-6 col-md-6">
                <h3>Recipient Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        First Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        Last Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        Phone <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        Email Address <span>*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <h3>Address Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        City <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        Street Address <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        Nearest Bus Stop <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={busstop}
                        onChange={(e) => setBusstop(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="default-form-box">
                      <label>
                        House Number <span>*</span>
                      </label>
                      <input
                        type="text"
                        value={housenumber}
                        onChange={(e) => setHousenumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="payment_method">
                  <div className="order_button pt-3">
                    <button
                      className="btn btn-md btn-black-default-hover"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Place an Order
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-6 col-md-6">
                <h3>Your Order</h3>
                <div className="order_table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item._id}>
                          <td>
                            {item.name} <strong> × {item.quantity}</strong>
                          </td>
                          <td>{item.price * item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Cart Subtotal</th>
                        <td>{totalPrice}</td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td>
                          <strong>$5.00</strong>
                        </td>
                      </tr>
                      <tr className="order_total">
                        <th>Order Total</th>
                        <td>
                          <strong>{totalPrice + 5}</strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
