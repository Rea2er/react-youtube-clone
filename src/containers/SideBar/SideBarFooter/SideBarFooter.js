import React from "react";
import "./SideBarFooter.scss";

const SideBarFooter = () => {
  return (
    <>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className="footer-block">
        <div>All prices include VAT</div>
      </div>
      <div className="footer-block">
        <div>
          © Productioncoder.com - A Youtube clone for educational purposes under
          fair use.
        </div>
      </div>
    </>
  );
};

export default SideBarFooter;
