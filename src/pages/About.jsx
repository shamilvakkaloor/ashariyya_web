import { FaQuoteLeft, FaCheckCircle, FaMosque, FaBookOpen } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* HERO / HEADER SECTION */}
            <section className="about-hero">
                <div className="container">
                    <h1>About Us</h1>
                    <p className="breadcrumb">Home / About Us</p>
                </div>
            </section>

            {/* MAIN INTRODUCTION */}
            <section className="section about-intro">
                <div className="container intro-grid">
                    <div className="intro-content">
                        <h2>About Jamia Ash'ariyya Islamic & Arts</h2>
                        <h3 className="subh3">"Bridging faith and knowledge for a balanced future."</h3>
                        <p>
                            The Ash'ari Curriculum represents a significant advancement in integrated education. In a modern world where science, technology, and materialism dominate, we bridge the gap between spiritual values and material progress.
                        </p>
                        <p>
                            The Ash'ari Course is an integrated religious and material education project inspired by the spiritual vision of Shaikh C.M. Waliullahi (PBUH) Madavoor. Under the blessed guidance of Samasta Kerala Jam'iyyath Al-Ulama President, Sayyidul Ulama Sayyid Muhammad Jifri Muthukoya Thangal, this institution has been nurturing students since 1996.
                        </p>
                        <p>
                            Located in the blessed premises of CM Makham Shareef, Madavoor, Calicut, our institution provides a unique educational experience where traditional Islamic scholarship meets modern academic excellence.
                        </p>
                    </div>
                    <div className="intro-image-container">
                        <img src="https://placehold.co/600x600/1a2e4a/ffffff?text=About+Ashariyya" alt="About Ashariyya" />
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="section mission-vision-section">
                <div className="container mv-grid">
                    <div className="vision-card">
                        <div className="mv-icon"><FaMosque /></div>
                        <h3>Our Vision</h3>
                        <p>
                            To be a leading center of integrated education that produces graduates who are spiritually grounded, academically excellent, and equipped to contribute positively to society while upholding Islamic values in the modern world.
                        </p>
                    </div>
                    <div className="mission-card">
                        <div className="mv-icon"><FaBookOpen /></div>
                        <h3>Our Mission</h3>
                        <ul>
                            <li><FaCheckCircle /> Provide quality integrated education combining religious and modern academic curricula</li>
                            <li><FaCheckCircle /> Nurture students in an Islamic atmosphere that strengthens their faith and character</li>
                            <li><FaCheckCircle /> Develop multilingual capabilities in Arabic, English, and Urdu</li>
                            <li><FaCheckCircle /> Foster research-oriented learning and critical thinking</li>
                            <li><FaCheckCircle /> Prepare students for success in both spiritual and material pursuits</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* UNIQUE FEATURES */}
            <section className="section unique-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>What Makes Us Unique</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="unique-grid">
                        {[
                            { title: "Integrated Curriculum", desc: "Seamless blend of traditional Islamic education and modern university curricula." },
                            { title: "Scholarship-Based Learning", desc: "Led by accomplished scholars and experienced educators." },
                            { title: "Zero Financial Burden", desc: "Free education, accommodation, and food for all students." },
                            { title: "Multilingual Excellence", desc: "Mastery in Arabic, English, and Urdu languages." },
                            { title: "Research Culture", desc: "Focus on research papers and scholarly work from secondary level." },
                            { title: "Holistic Development", desc: "Character building, leadership skills, and extracurricular activities." },
                            { title: "Authentic Islamic Atmosphere", desc: "Spiritual development rooted in Islamic etiquette and daily prayers." },
                            { title: "Career Pathways", desc: "Diverse opportunities in Islamic scholarship, IT, business, and more." }
                        ].map((item, index) => (
                            <div key={index} className="unique-card">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GOVERNANCE */}
            <section className="section governance-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Governance</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="governance-grid">
                        <div className="gov-col">
                            <h3>Spiritual Leadership</h3>
                            <div className="gov-item">
                                <strong>President</strong>
                                <p>Sayyidul Ulama Sayyid Muhammad Jifri Muthukoya Thangal</p>
                                <span>(Samasta Kerala Jam'iyyath Al-Ulama)</span>
                            </div>
                            <div className="gov-item">
                                <strong>Founder's Vision</strong>
                                <p>Shaikh C.M. Waliullahi (PBUH) Madavoor</p>
                            </div>
                        </div>
                        <div className="gov-col">
                            <h3>Administrative Structure</h3>
                            <ul className="gov-list">
                                <li><strong>Chairman:</strong> C.A.C. (Co-ordination of Ash'ari Colleges)</li>
                                <li><strong>Principal:</strong> [To be updated]</li>
                                <li><strong>Academic Dean:</strong> [To be updated]</li>
                                <li><strong>Administrative Officer:</strong> [To be updated]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FACILITIES */}
            <section className="section facilities-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Infrastructure & Facilities</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="facilities-grid">
                        <div className="facility-text">
                            <p>Located in the blessed premises of CM Makham Shareef, Madavoor, Calicut, our institution boasts 30+ years of excellence.</p>
                            <ul className="facility-list">
                                <li>Modern classrooms with traditional ambiance</li>
                                <li>Comprehensive reference and research library</li>
                                <li>Computer lab with latest technology</li>
                                <li>Language laboratory for Arabic, English, and Urdu</li>
                                <li>Prayer hall for daily congregational prayers</li>
                                <li>Hostel accommodation (Free for students)</li>
                                <li>Dining facilities (Free meals provided)</li>
                            </ul>
                        </div>
                        <div className="facility-image">
                            <img src="https://placehold.co/600x400/e0e0e0/8888?text=Campus+Facilities" alt="Facilities" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
