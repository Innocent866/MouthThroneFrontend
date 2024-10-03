import React, { useState } from 'react';
import "../../assets/css/vendor/vendor.min.css"
import "../../assets/css/plugins/plugins.min.css"
import "../../assets/css/style.min.css"

const ModalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (event) => {
    if (event.target.className === 'close') {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <a href="#search" onClick={handleOpen}>
      <i className="icon-magnifier"></i>
      </a>
      {isOpen && (
        <div id="search" className="search-modal" onClick={handleClose}>
          <button type="button" className="close">×</button>
          <form>
            <input type="search" placeholder="Type keyword(s) here" />
            <button type="submit" className="btn btn-lg btn-golden">
              Search
            </button>
          </form>
        </div>
      )}
      {isOpen && <div className="offcanvas-overlay"></div>}
    </div>
  );
};

export default ModalSearch;