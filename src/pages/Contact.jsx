import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p className="breadcrumb">Home / Contact</p>
                </div>
            </section>

            <section className="section contact-container">
                <div className="container contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card">
                        <h2>Get in Touch</h2>
                        <p className="lead-text">We'd love to hear from you. Reach out to us for any queries.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="c-icon" />
                                <div>
                                    <h3>Campus Address</h3>
                                    <p>Jamia Ash'ariyya Islamic & Arts<br />
                                        CM Makham Shareef, Madavoor<br />
                                        Narikkuni Via, Calicut - 673585<br />
                                        Kerala, India
                                    </p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="c-icon" />
                                <div>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+919188466113">+91 91884 66113</a></p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="c-icon" />
                                <div>
                                    <h3>Email Address</h3>
                                    <p><a href="mailto:ashariyyamadavoor@gmail.com">ashariyyamadavoor@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaWhatsapp className="c-icon" />
                                <div>
                                    <h3>WhatsApp</h3>
                                    <p><a href="https://wa.me/919188466113" target="_blank" rel="noopener noreferrer">+91 91884 66113</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Form */}
                    <div className="contact-form-card">
                        <h2>Send a Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    title="Campus Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.186641777264!2d75.8833!3d11.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE5JzAwLjEiTiA3NcKwNTMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </section>
        </div>
    );
};

export default Contact;
