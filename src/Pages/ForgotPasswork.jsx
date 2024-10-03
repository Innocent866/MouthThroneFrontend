import React, { useState } from "react"; // Import useState
import axios from "axios"; // Import axios for API requests
import { toast } from "react-toastify"; // Import toast for notifications
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // Manage email state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logInData = { email };

    try {
      const res = await axios.post(
        "https://mouththrown.onrender.com/api/user/forgotpassword",
        logInData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success === true) {
        toast.success(res.data.message); // Display success message
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred"); // Display error message
    }
  };

  return (
    <div
      className="d-flex justify-content-center vh-100 align-items-center w-100"
      style={{
        backgroundColor: "#5a3d0c",
        color: "white",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      }}
    >
      <form onSubmit={handleSubmit} className="w-75">
        {" "}
        {/* Add onSubmit to form */}
        <div className="d-flex flex-column w-75 mx-auto justify-content-center">
          <Link to="/">
            <h1
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
              className="text-center"
            >
              MOUTH<span style={{ color: "gold" }}>THRONE</span>
            </h1>
          </Link>
          <p className="text-center m-0">You forgot your password</p>
          <p className="text-center">
            Please fill in the fields below to retrieve your password. Fields
            marked with an asterisk (*) are required.
          </p>
        </div>
        <div className="default-form-box">
          <label className="fw-bold text-white">
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login_submit">
          <button
            className="btn btn-md btn-black-default-hover w-100"
            type="submit"
          >
            Send Reset Link{" "}
            {/* Change button text to something more appropriate */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
