import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar/profile.css";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
import { SiGnuprivacyguard } from "react-icons/si";


const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleSignin = () => {
    navigate("/signin");
  };

  return (
    
    <div className="profile-div">
      
      <Link
        className="offacnvas offside-about offcanvas-toggles"
        onClick={toggleMenu}
      >
        <i className="icon-user"></i>
      </Link>

      {/* Sub Menu */}
      <ul className={`profile-menu ${menuOpen ? "show" : ""}`}>
        {token ? (
          <>
            <li className="profile-list">My Account</li>
            <li className="profile-list">Settings</li>
            <button
              className="profile-list btn w-100 btn-dark text-center"
              onClick={handleLogout}
            >
              <VscSignOut/>
              Log Out
            </button>
          </>
        ) : (
          <>
            <li onClick={handleSignup} className="link-profile">
              <SiGnuprivacyguard/>
              Sign Up
            </li>
            <li onClick={handleSignin} className="link-profile">
              <VscSignIn/>
              Sign In
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Profile;
