import { FaCheckCircle, FaUserGraduate, FaFileAlt, FaBullhorn, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import './Admission.css';

const Admission = () => {
    return (
        <div className="admission-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Join the Ash'ari Family</h1>
                    <p className="breadcrumb">Home / Admission</p>
                </div>
            </section>

            {/* INTRO */}
            <section className="section admission-intro">
                <div className="container text-center">
                    <p className="lead-text">Begin your journey towards integrated excellence in Islamic and modern education.</p>
                </div>
            </section>

            {/* ADMISSION PROCESS */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Admission Process</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="process-grid">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Check Eligibility</h3>
                            <p>Review the admission criteria for your desired program level.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Fill Application</h3>
                            <p>Complete the online application form with accurate details.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Entrance Exam</h3>
                            <p>Appear for competitive oral and written entrance tests.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Admission</h3>
                            <p>Selected candidates complete admission formalities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMS DETAILS */}
            <section className="section eligibility-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Programs & Eligibility</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="eligibility-grid">
                        {[
                            { title: "Secondary Level (Thanawi)", criteria: ["Age: Under 13 years", "Academic: Completed 7th Standard", "Religious: Cleared 5th-grade Samastha"] },
                            { title: "Higher Secondary - Commerce", criteria: ["Age: Under 16 years", "Academic: Completed SSLC", "Religious: Cleared 7th-grade Samastha"] },
                            { title: "Higher Secondary - Humanities", criteria: ["Age: Under 16 years", "Academic: Completed SSLC", "Religious: Cleared 7th-grade Samastha"] },
                            { title: "Degree Programs", criteria: ["Completed Higher Secondary", "3 Years Duration", "Integrated Curriculum"] },
                            { title: "Post-Graduate Programs", criteria: ["Completed Bachelor's degree", "2 Years Duration", "Specialized Studies"] }
                        ].map((prog, index) => (
                            <div key={index} className="eligibility-card">
                                <h3><FaUserGraduate /> {prog.title}</h3>
                                <ul>
                                    {prog.criteria.map((c, i) => <li key={i}><FaCheckCircle /> {c}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FREE EDUCATION HIGHLIGHT */}
            <section className="section fee-section">
                <div className="container text-center">
                    <h2>COMPLETELY FREE EDUCATION</h2>
                    <p className="lead-text">Education is a right, not a privilege.</p>
                    <div className="fee-features">
                        <div className="fee-feature">
                            <h3>Free Tuition</h3>
                            <p>All academic instruction provided at no cost.</p>
                        </div>
                        <div className="fee-feature">
                            <h3>Free Accommodation</h3>
                            <p>Hostel facilities with comfortable living arrangements.</p>
                        </div>
                        <div className="fee-feature">
                            <h3>Free Food</h3>
                            <p>Three nutritious meals daily plus snacks provided.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW TO APPLY */}
            <section className="section apply-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>How to Apply</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="apply-options">
                        <div className="apply-card online">
                            <h3>Option 1: Online Application</h3>
                            <p>Fill out our Google Form application designed for quick submission.</p>
                            <a href="https://forms.gle/zSmALfbm1ufjjhYu9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Online Now</a>
                        </div>
                        <div className="apply-card whatsapp">
                            <h3>Option 2: WhatsApp Inquiry</h3>
                            <p>For queries or assistance with the application process.</p>
                            <a href="https://wa.me/919188466113" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><FaWhatsapp /> Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Frequently Asked Questions</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Is there any admission fee?</h4>
                            <p>No, admission is completely free including tuition, accommodation, and food.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What documents are required?</h4>
                            <p>Previous academic certificates, ID proof, and photos.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Is hostel mandatory?</h4>
                            <p>Most students stay in hostels, but day scholar options may be available.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Are there scholarships available?</h4>
                            <p>The entire program is free, so separate scholarships are not applicable.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admission;
