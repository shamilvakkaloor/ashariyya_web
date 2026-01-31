import Link from 'react-router-dom'; // Mistake here, should be import { Link } from ...
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    // Correcting the import inside the function? No, need to fix the file.
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/admission">Admission</a></li>
                        <li><a href="/programs">Programs</a></li>
                        <li><a href="/notices">Notice Board</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Programs */}
                <div className="footer-col">
                    <h4>Programs</h4>
                    <ul>
                        <li><a href="/academics">Secondary Level</a></li>
                        <li><a href="/academics">Higher Secondary - Commerce</a></li>
                        <li><a href="/academics">Higher Secondary - Humanities</a></li>
                        <li><a href="/academics">Degree Programs</a></li>
                        <li><a href="/academics">Post-Graduate</a></li>
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
