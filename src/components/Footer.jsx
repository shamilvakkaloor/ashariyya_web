import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                {/* Column 1: About */}
                <div className="footer-col">
                    <h3 className="footer-logo">CO-ORDINATION OF ASH'ARI COLLEGES</h3>
                    <p>
                        Jamia Ash'ariyya Islamic & Arts, Madavoor - Integrating Islamic values with modern education since 1996.
                        Providing free education, accommodation, and meals to deserving students.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/academics">Programs</Link></li>
                        <li><Link to="/notice-board">Notice Board</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Programs */}
                <div className="footer-col">
                    <h4>Programs</h4>
                    <ul>
                        <li><Link to="/academics">Secondary Level</Link></li>
                        <li><Link to="/academics">Higher Secondary - Commerce</Link></li>
                        <li><Link to="/academics">Higher Secondary - Humanities</Link></li>
                        <li><Link to="/academics">Degree Programs</Link></li>
                        <li><Link to="/academics">Post-Graduate</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Jamia Ash'ariyya Islamic & Arts<br />CM Makham Shareef Madavoor<br />Narikkuni (Via), Calicut<br />Kerala - 673585</span>
                    </div>
                    <div className="contact-item">
                        <FaPhone /> <span>+91 91884 66113</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope /> <span>ashariyyamadavoor@gmail.com</span>
                    </div>
                    <div className="footer-socials">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>© 2026 Jamia Ash'ariyya Islamic & Arts - Madavoor. All Rights Reserved.</p>
                    <p>Guided by Samasta Kerala Jam'iyyath Al-Ulama</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
