import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <div className="d-flex justify-content-center mb-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            title="Instagram"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            title="Facebook"
          >
            <FaFacebook size={28} />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3"
            title="X"
          >
            <FaXTwitter size={28} />
          </a>
        </div>
        <p className="mb-0">© 2025 Chilean Premier League</p>
      </div>
    </footer>
  );
};

export default Footer;
