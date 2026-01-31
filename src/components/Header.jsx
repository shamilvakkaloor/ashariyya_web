import { Link, NavLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:+919188466113"><FaPhone /> +91 91884 66113</a>
                        <a href="mailto:ashariyyamadavoor@gmail.com"><FaEnvelope /> ashariyyamadavoor@gmail.com</a>
                    </div>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav-wrapper">
                <div className="container main-nav-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">JAMIA ASH'ARIYYA <br /> MADAVOOR</span>
                    </Link>

                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                            <li className="dropdown">
                                {/* Simplified dropdown for now, can be enhanced with CSS hover */}
                                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                            </li>
                            <li><NavLink to="/admission" onClick={() => setIsMenuOpen(false)}>Admission</NavLink></li>
                            <li><NavLink to="/academics" onClick={() => setIsMenuOpen(false)}>Academics</NavLink></li>
                            <li><NavLink to="/campus-life" onClick={() => setIsMenuOpen(false)}>Campus Life</NavLink></li>
                            <li><a href="https://forms.gle/zSmALfbm1ufjjhYu9" target="_blank" rel="noopener noreferrer" className="btn-nav" style={{ backgroundColor: 'var(--color-secondary)' }}>Apply Now</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Floating WhatsApp */}
            <a href="https://wa.me/919188466113" className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
        </header>
    );
};

export default Header;
