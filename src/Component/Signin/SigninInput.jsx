import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/Signup/Imageinput.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa"; // Importing the icon
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const SigninInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logInData = {
      email,
      password,
    };

    try {
      setIsloading(true);
      const res = await axios.post(
        "https://mouththrown.onrender.com/api/user/login",
        logInData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success === true) {
        toast.success(res.data.message);
        navigate("/");
      }

      const token = res.data?.user?.token;

      window.localStorage.setItem("token", token);

      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div
      className="d-md-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#5a3d0c", color:"white", fontFamily:"Verdana, Geneva, Tahoma, sans-serif" }}
    >
      <div className="w-100 p-5">
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
          <p className="text-center m-0">Welcome Back</p>
          <p className="text-center">
            Please fill in the fields below to create your account. Fields
            marked with an asterisk (*) are required.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded border border-1 p-5">
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

          <Link to="/forgetpassword" className="pb-5" ><u>Forget Password</u></Link>

          <div className="login_submit">
            <button
              className="btn btn-md btn-black-default-hover w-100"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <p className="text-center">
            Din't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up!
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SigninInput;
