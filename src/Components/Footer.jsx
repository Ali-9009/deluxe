import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const equipmentLinks = [
        { name: "Bobst Ambition 110", to: "#" },
        { name: "Cron CTP", to: "#" },
        { name: "Epson Stylus Pro", to: "#" },
        { name: "KBA Rapida 106-7", to: "#" },
        { name: "Nova Cut 106", to: "#" },
        { name: "X-Rite Exact", to: "#" },
        { name: "X-Rite iCPlate 2", to: "#" },
    ];

    const quickLinks = [
        { name: "About Us", to: "/about" },
        { name: "Processing", to: "/processing" },
        { name: "Products", to: "#" },
        { name: "Blog", to: "/blog" },
        { name: "Equipment", to: "/equipment" },
        { name: "Contact Us", to: "/contact" },
    ];

    return (
        <footer className="bg-light pt-5">
            <div className="container">

                <div className="row g-4">

                    {/* LOGO + SOCIAL */}
                    <div className="col-lg-3 col-md-6">
                        <img
                            src="/images/DP-logo.png"
                            alt="Logo"
                            style={{ maxWidth: "160px" }}
                        />

                        <p className="text-muted mt-3 small">
                            Delivering premium packaging solutions with modern printing and
                            production technology.
                        </p>

                        <div className="d-flex gap-2 mt-3">
                            <SocialIcon icon={<FaLinkedin />} />
                            <SocialIcon icon={<FaFacebook />} />
                            <SocialIcon icon={<FaInstagram />} />
                        </div>
                    </div>

                    {/* EQUIPMENT */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-3">Equipment</h5>

                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {equipmentLinks.map((item, i) => (
                                <li key={i}>
                                    <Link className="text-decoration-none text-dark footer-link" to={item.to}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-3">Quick Links</h5>

                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {quickLinks.map((item, i) => (
                                <li key={i}>
                                    <Link className="text-decoration-none text-dark footer-link" to={item.to}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-3">Newsletter</h5>

                        <p className="text-muted small">
                            Subscribe to get updates about our latest packaging solutions.
                        </p>

                        <div className="input-group mt-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                            <button className="btn btn-dark d-flex align-items-center">
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-top mt-5 py-3 text-center small text-muted">
                    © 2024 Delux Packaging. All rights reserved.
                </div>

            </div>

            {/* SIMPLE CSS */}
            <style>
                {`
                    .footer-link:hover {
                        color: #000;
                        text-decoration: underline;
                        transition: 0.2s;
                    }
                `}
            </style>
        </footer>
    );
};

/* SOCIAL ICON COMPONENT */
function SocialIcon({ icon }) {
    return (
        <a
            href="#"
            className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle"
            style={{ width: "38px", height: "38px" }}
        >
            {icon}
        </a>
    );
}

export default Footer;