import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/Signup/Imageinput.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa"; // Importing the icon
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Input = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [verifypassword, setVerifypassword] = useState("");
  const [image, setImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phonenumber", phonenumber);
      formData.append("password", password);
      formData.append("verifypassword", verifypassword);
      formData.append("image", image);

      const response = await axios.post(
        "https://mouththrown.onrender.com/api/user/registration",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success === true) {
        toast.success(response.data.message);
        navigate("/signin");
      }
    } catch (error) {
      if (error.message === "Network Error") {
        toast.error("No internet connection");
      } else {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setSelectedFileName(file.name);
    }
  };

  return (
    <div
      className="d-md-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#5a3d0c", color:"white", fontFamily:"Verdana, Geneva, Tahoma, sans-serif" }}
    >
      <div className="container p-5">
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
          <p className="text-center m-0">Create Your Account</p>
          <p className="text-center">
            Please fill in the fields below to create your account. Fields
            marked with an asterisk (*) are required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded border border-1 p-5">
          <div className="default-form-box">
            <label className="fw-bold">
              First Name <span>*</span>
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="default-form-box">
            <label className="fw-bold">
              Last Name <span>*</span>
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="default-form-box">
            <label className="fw-bold">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="default-form-box">
            <label className="fw-bold">
              Phone Number <span>*</span>
            </label>
            <input
              type="number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          </div>
          <div className="default-form-box position-relative">
            <label className="fw-bold">
              Password <span>*</span>
            </label>
            <div
              onClick={handleShow}
              className="position-absolute top-50 translate-middle-y pt-1"
              style={{ right: "10px", cursor: "pointer" }}
            >
              {show ? <BiHide className="fs-5" /> : <BiShow className="fs-5" />}
            </div>
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="default-form-box">
            <label className="fw-bold">
              Confirm Password <span>*</span>
            </label>
            <input
              type="password"
              value={verifypassword}
              onChange={(e) => setVerifypassword(e.target.value)}
              required
            />
          </div>
          <div className="default-form-box">
            <div className="custom-file-input">
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="fileInput"
                className="custom-file-label w-100 text-center"
              >
                <FaCloudUploadAlt className="upload-icon" />
                {selectedFileName}
              </label>
            </div>
          </div>
          <div className="login_submit">
            <button
              className="btn btn-md btn-black-default-hover w-100"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary">
              Sign In!
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Input;
