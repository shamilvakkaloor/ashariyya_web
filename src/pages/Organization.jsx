import { FaSitemap, FaUsers, FaHandsHelping, FaUserTie } from 'react-icons/fa';
import './Organization.css';

const Organization = () => {
    return (
        <div className="organization-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Our Organization</h1>
                    <p className="breadcrumb">Home / Organization</p>
                </div>
            </section>

            {/* INTRO */}
            <section className="section org-intro">
                <div className="container text-center">
                    <p className="lead-text">
                        A structured ecosystem driving excellence. Our organization is built on strong pillars of leadership, student participation, and alumni support.
                    </p>
                </div>
            </section>

            {/* STRUCTURE */}
            <section className="section structure-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Organizational Structure</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="org-chart">
                        <div className="chart-node root">
                            <FaSitemap />
                            <h3>Co-ordination of Ash'ari Colleges (C.A.C)</h3>
                            <p>Governing Body</p>
                        </div>
                        <div className="chart-connector-vertical"></div>
                        <div className="chart-level-2">
                            <div className="chart-node">
                                <h3>Principal</h3>
                                <p>Head of Institution</p>
                            </div>
                        </div>
                        <div className="chart-connector-vertical"></div>
                        <div className="chart-level-3">
                            <div className="chart-node small">
                                <strong>Academic Dean</strong>
                            </div>
                            <div className="chart-node small">
                                <strong>Administrative Officer</strong>
                            </div>
                            <div className="chart-node small">
                                <strong>Staff Council</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STUDENT UNION */}
            <section className="section union-section">
                <div className="container">
                    <div className="union-content">
                        <div className="union-text">
                            <h2><FaUsers /> Ash'ariyya Students Federation (ASF)</h2>
                            <p>
                                The dynamic student wing of Jamia Ash'ariyya. ASF plays a pivotal role in the holistic development of students, organizing arts festivals, literary competitions, and social service activities.
                            </p>
                            <ul className="union-activities">
                                <li>Organizing 'Mehrajan' Annual Arts Fest</li>
                                <li>Publishing Student Magazines</li>
                                <li>Conducting Debates and Symposiums</li>
                                <li>Social Relief Works</li>
                            </ul>
                        </div>
                        <div className="union-image">
                            <div className="placeholder-box">ASF Logo / Activity Photo</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALUMNI */}
            <section className="section alumni-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2><FaUserTie /> Old Students of Ash'ariyya (OSBA)</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="alumni-content text-center">
                        <p className="lead-text">
                            Our global alumni network is our greatest strength. OSBA members active in various fields worldwide continue to support their alma mater and mentor current students.
                        </p>
                        <div className="alumni-stats">
                            <div className="stat-item">
                                <h3>Global Chapters</h3>
                                <p>UAE, Saudi Arabia, Qatar, etc.</p>
                            </div>
                            <div className="stat-item">
                                <h3>Mentorship</h3>
                                <p>Career guidance for graduates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMITTEES */}
            <section className="section committees-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Key Committees</h2>
                    </div>
                    <div className="committees-grid">
                        <div className="committee-card">
                            <h3><FaHandsHelping /> Welfare Committee</h3>
                            <p>Ensuring student well-being and managing hostel/dining facilities.</p>
                        </div>
                        <div className="committee-card">
                            <h3><FaBook /> Editorial Board</h3>
                            <p>Overseeing publications, magazines, and newsletters.</p>
                        </div>
                        <div className="committee-card">
                            <h3><FaUsers /> Public Relations</h3>
                            <p>Managing external relations and media presence.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Organization;
