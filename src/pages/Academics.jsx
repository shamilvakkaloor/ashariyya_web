import { FaBook, FaUniversity, FaScroll, FaGraduationCap, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import './Academics.css';

const Academics = () => {
    return (
        <div className="academics-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Our Academic Programs</h1>
                    <p className="breadcrumb">Home / Academics</p>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="section overview-section">
                <div className="container text-center">
                    <p className="lead-text">
                        At Jamia Ash'ariyya, we offer a unique integrated curriculum that seamlessly blends traditional Islamic education with contemporary academic programs. Our students receive the best of both worlds - deep religious knowledge and modern academic credentials.
                    </p>
                </div>
            </section>

            {/* STRUCTURE */}
            <section className="section structure-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Educational Structure</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="structure-grid">
                        <div className="structure-card">
                            <h3><FaScroll /> Dual Curriculum</h3>
                            <p>Simultaneous study of Traditional Dars-e-Nizami and Modern University Tracks.</p>
                        </div>
                        <div className="structure-card">
                            <h3><FaBook /> Language Focus</h3>
                            <p>Intensive training in Arabic, English, Urdu, and Malayalam.</p>
                        </div>
                        <div className="structure-card">
                            <h3><FaGraduationCap /> Skill Development</h3>
                            <p>Research, public speaking, IT, and leadership training.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMS LIST */}
            <section className="section programs-list-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Detailed Programs</h2>
                    </div>

                    <div className="program-detail-card">
                        <h3>Secondary Level (Thanawi)</h3>
                        <div className="prog-content">
                            <div>
                                <h4>Religious Subjects</h4>
                                <ul><li>Quranic Studies</li><li>Fiqh & Hadith Fundamentals</li><li>Arabic Grammar</li></ul>
                            </div>
                            <div>
                                <h4>Modern Subjects</h4>
                                <ul><li>Mathematics & Science</li><li>Social Studies</li><li>English & Malayalam</li></ul>
                            </div>
                        </div>
                    </div>

                    <div className="program-detail-card">
                        <h3>Higher Secondary (Commerce & Humanities)</h3>
                        <div className="prog-content">
                            <div>
                                <h4>Religious Focus</h4>
                                <ul><li>Advanced Fiqh & Hadith</li><li>Tafseer</li><li>Islamic Economics/Philosophy</li></ul>
                            </div>
                            <div>
                                <h4>Modern Focus</h4>
                                <ul><li>Commerce: Accounting, Business</li><li>Humanities: History, Pol. Science</li></ul>
                            </div>
                        </div>
                    </div>

                    <div className="program-detail-card">
                        <h3>Degree & PG Programs</h3>
                        <div className="prog-content">
                            <div>
                                <h4>University Curriculum</h4>
                                <ul><li>BA/B.Com & MA/M.Com</li><li>Project Work</li><li>Research Methodology</li></ul>
                            </div>
                            <div>
                                <h4>Islamic Studies</h4>
                                <ul><li>Usool al-Fiqh</li><li>Scholarly Research</li><li>Classical Texts</li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXAM & PORTAL */}
            <section className="section portal-section">
                <div className="container text-center">
                    <h2>Student Examination Portal</h2>
                    <p>Access results, hall tickets, and timetables online.</p>
                    <button className="btn btn-secondary mt-md"><FaExternalLinkAlt /> Access Student Portal</button>
                    <div className="syllabus-downloads mt-lg">
                        <h3>Downloads</h3>
                        <div className="download-links">
                            <a href="#" className="download-item"><FaDownload /> Secondary Syllabus</a>
                            <a href="#" className="download-item"><FaDownload /> Higher Secondary Syllabus</a>
                            <a href="#" className="download-item"><FaDownload /> Degree Curriculum</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
