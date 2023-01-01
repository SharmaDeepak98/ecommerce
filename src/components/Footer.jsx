import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>about us</li>
                <li>our services</li>
                <li>privacy</li>
                <li>affiliate program</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>FAQ</li>
                <li>shipping</li>
                <li>returns</li>
                <li>order status</li>
                <li>payment options</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>watch</li>
                <li>bag</li>
                <li>shoe </li>
                <li>dress</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <i className="ti ti-brand-facebook"></i>
                <i className="ti ti-brand-twitter"></i>
                <i className="ti ti-brand-github"></i>
                <i className="ti ti-brand-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
