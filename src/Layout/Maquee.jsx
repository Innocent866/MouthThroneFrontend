import React from "react";
import Marquee from "react-fast-marquee";

const Maquee = () => {
  return (
    <div className="bg-dark text-white fs-1">
      <Marquee
        speed={60}
        direction="left"
        pauseOnHover={true}
        gradient={true}
        gradientColor={[255, 255, 255]}
      >
        <div className="d-flex gap-5">
          <h2 className="px-5 text-danger">UNDER CONSTRUCTION</h2>
          <h2 className="px-5 text-danger">UNDER CONSTRUCTION</h2>
          <h2 className="px-5 text-danger">UNDER CONSTRUCTION</h2>
          <h2 className="px-5 text-danger">UNDER CONSTRUCTION</h2>
          <h2 className="px-5 text-danger">UNDER CONSTRUCTION</h2>
        </div>
      </Marquee>
    </div>
  );
};

export default Maquee;
