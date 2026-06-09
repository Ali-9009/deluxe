import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-red-600 font-semibold"
            : "text-gray-700 hover:text-red-600 transition";

    const closeMenu = () => setOpen(false);

    return (
        <>
            {/* Header */}
            <header
                className={`sticky top-0 z-40 bg-white transition-all duration-300
                ${scrolled
                        ? "shadow-md py-3"
                        : "py-3"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                    {/* Logo */}
                    <NavLink to="/">
                        <img
                            src="/images/DP-logo.png"
                            alt="Logo"
                            className={`object-contain transition-all duration-300
                            ${scrolled
                                    ? "h-10"
                                    : "h-14"
                                }`}
                        />
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium">
                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={linkClass}>
                            About Us
                        </NavLink>

                        <NavLink to="/processing" className={linkClass}>
                            Processing
                        </NavLink>

                        <NavLink to="/equipment" className={linkClass}>
                            Equipment
                        </NavLink>

                        <NavLink to="/blog" className={linkClass}>
                            Blog
                        </NavLink>

                        <NavLink to="/contact" className={linkClass}>
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        <a
                            href="mailto:info@example.com"
                            className="hidden lg:block"
                        >
                            <img
                                src="/mail.png"
                                alt="mail"
                                className="w-10 hover:scale-105 transition"
                            />
                        </a>

                        <a
                            href="tel:+923001234567"
                            className="hidden lg:block"
                        >
                            <img
                                src="/phone.png"
                                alt="phone"
                                className="w-10 hover:scale-105 transition"
                            />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="lg:hidden text-4xl"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50
                transition-transform duration-300
                ${open
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-3 border-b">
                    <img
                        src="/images/DP-logo.png"
                        alt="Logo"
                        className="h-10"
                    />

                    <button
                        onClick={closeMenu}
                        className="text-3xl"
                    >
                        <IoClose />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="d-flex flex-column p-5 gap-4 fw-medium">

                    <NavLink
                        to="/"
                        className={linkClass}
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={linkClass}
                        onClick={closeMenu}
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/processing"
                        className={linkClass}
                        onClick={closeMenu}
                    >
                        Processing
                    </NavLink>

                    <NavLink
                        to="/equipment"
                        className={linkClass}
                        onClick={closeMenu}
                    >
                        Equipment
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={linkClass}
                        onClick={closeMenu}
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={linkClass}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </NavLink>

                </div>

                {/* Sidebar Footer */}
                <div className="absolute bottom-5 left-5 flex gap-3">
                    <a href="mailto:info@example.com">
                        <img
                            src="/mail.png"
                            alt="mail"
                            className="w-10"
                        />
                    </a>

                    <a href="tel:+923001234567">
                        <img
                            src="/phone.png"
                            alt="phone"
                            className="w-10"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}