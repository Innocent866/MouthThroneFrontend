import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="none" onClick={handleShow}>
        <Link className="offcanvas-toggle offside-menu">
          <i className="icon-menu"></i>
        </Link>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
        className="bg-dark text-white d-lg-none"
        style={{ width: "50%" }}
      >
      
        <Offcanvas.Body>
          {/* Start Offcanvas Mobile Menu Section */}
          <div id="mobile-menu-offcanvas">
            {/* Start Offcanvas Header */}
            <div className="offcanvas-header text-right" onClick={()=>handleClose()}>
              <button className="offcanvas-close" >
                <i className="ion-android-close"></i>
              </button>
            </div>
            {/* End Offcanvas Header */}

            {/* Start Offcanvas Mobile Menu Wrapper */}
            <div className="offcanvas-mobile-menu-wrapper">
              {/* Start Mobile Menu */}
              <div className="mobile-menu-bottom">
                {/* Start Mobile Menu Nav */}
                <div className="offcanvas-menu">
                  <ul>
                    <li>
                      <Link to="/"><span>Home</span></Link>
                    </li>
                    <li>
                      <Link to="/product"><span>Shop</span></Link>
                    </li>
                    <li>
                      <Link to="/about"><span>About</span></Link>
                    </li>
                    <li>
                      <Link to="/contact"><span>Contact</span></Link>
                    </li>
                  </ul>
                </div>
                {/* End Mobile Menu Nav */}
                <div className="text-center mt-5">
                    <Link to="/">
                  <img src="path/to/your/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              {/* End Mobile Menu */}
            </div>
            {/* End Offcanvas Mobile Menu Wrapper */}
          </div>
          {/* End Offcanvas Mobile Menu Section */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileModal;
