import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaBook, FaGlobe, FaGraduationCap, FaUniversity, FaLaptopCode, FaCalculator, FaUserGraduate, FaExchangeAlt, FaCrown, FaMosque, FaScroll, FaChalkboardTeacher, FaTrophy, FaLanguage, FaSeedling, FaMicroscope } from 'react-icons/fa';
import NoticeCard from '../components/NoticeCard';
import ProgramCard from '../components/ProgramCard';
import FeatureCard from '../components/FeatureCard';
import EventCard from '../components/EventCard';
import StatCard from '../components/StatCard';
import './Home.css';

const Home = () => {
    const notices = [
        { date: "March 15, 2026", dept: "Admissions", title: "Admission Open for Academic Year 2026-27", brief: "Applications are now being accepted for Secondary and Higher Secondary levels." },
        { date: "March 10, 2026", dept: "Examinations", title: "Annual Examination Schedule Released", brief: "The examination timetable for all levels has been published." },
        { date: "March 5, 2026", dept: "Administration", title: "Hostel Accommodation Guidelines", brief: "Updated guidelines for hostel residents. Please review the new protocols." },
        { date: "February 28, 2026", dept: "Academic", title: "Library Timing Extended During Exams", brief: "Library will remain open until 10 PM during examination period." }
    ];

    const programs = [
        { icon: <FaBook />, title: "Secondary Level (Thanawi)", desc: "Integrated religious and modern education for students under 13." },
        { icon: <FaCalculator />, title: "Higher Secondary - Commerce", desc: "Comprehensive commerce education combined with traditional Islamic studies." },
        { icon: <FaGlobe />, title: "Higher Secondary - Humanities", desc: "Arts and humanities stream with focus on languages and Islamic scholarship." },
        { icon: <FaGraduationCap />, title: "Degree Programs", desc: "Bachelor's degree programs integrating university curriculum with religious education." },
        { icon: <FaUserGraduate />, title: "Post-Graduate Programs", desc: "Master's level education combining specialized religious studies with modern academics." },
        { icon: <FaExchangeAlt />, title: "Lateral Entry Programs", desc: "Special admission for students seeking to join mid-stream in any class level." },
        { icon: <FaLaptopCode />, title: "IT Education & DCA", desc: "Diploma in Computer Applications and comprehensive IT training." },
        { icon: <FaCalculator />, title: "Indian & Foreign Accounting", desc: "Professional diploma course in accounting practices - both domestic and international." }
    ];

    const features = [
        { icon: <FaCrown />, title: "Guided Leadership", desc: "Directed by the Samasta President and C.A.C. Chairman." },
        { icon: <FaMosque />, title: "Islamic Atmosphere", desc: "A campus environment rooted in faith, values, and spiritual development." },
        { icon: <FaScroll />, title: "Traditional Muthwawwal", desc: "Specialized study of classical religious texts and traditional Islamic sciences." },
        { icon: <FaChalkboardTeacher />, title: "Scholar-Led Tutoring", desc: "Instruction from talented scholars and experienced teachers." },
        { icon: <FaTrophy />, title: "Material Excellence", desc: "Full support for SSLC, Plus Two, Degree, PG, and DCA with excellent results." },
        { icon: <FaLanguage />, title: "Multilingual Training", desc: "Master Arabic, English, and Urdu - opening doors to global opportunities." },
        { icon: <FaSeedling />, title: "Skill Nurturing", desc: "Extracurricular activities designed to build student confidence." },
        { icon: <FaMicroscope />, title: "Research-Driven", desc: "Focus on academic research papers and scholarly work." },
        { icon: <FaBook />, title: "Library Resources", desc: "Access to high-quality reference materials and comprehensive research library." }
    ];

    return (
        <div className="home-page">
            {/* HER SECTOIN */}
            <section className="hero-section">
                <div className="hero-slider">
                    {/* Slide 1 - Active by default for MVP */}
                    <div className="hero-slide active">
                        <div className="hero-bg-placeholder">
                            {/* Placeholder for Video/Image */}
                            <div className="overlay"></div>
                        </div>
                        <div className="container hero-content">
                            <h1>ASH'ARI ADMISSION STARTED</h1>
                            <p>Join a community dedicated to spiritual and academic excellence.</p>
                            <div className="hero-buttons">
                                <a href="https://forms.gle/zSmALfbm1ufjjhYu9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Admission Started</a>
                                <Link to="/results" className="btn btn-outline">View Results</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION SECTION */}
            <section className="section intro-section">
                <div className="container intro-content">
                    <div className="intro-text">
                        <div className="section-header">
                            <h2>A Glimpse to Ash'ary Campus</h2>
                            <div className="divider"></div>
                        </div>
                        <p className="lead-text">
                            "The Ash'ari Curriculum represents a significant advancement in integrated education. In a modern world where science, technology, and materialism dominate, we bridge the gap between spiritual values and material progress."
                        </p>
                        <p>
                            The Ash'ari Course is an integrated religious and material education project inspired by the spiritual vision of Shaikh C.M. Waliullahi (PBUH) Madavoor.
                            Guided by the Samasta Kerala Jam'iyyath Al-Ulama President, Sayyidul Ulama Sayyid Muhammad Jifri Muthukoya Thangal.
                        </p>
                        <Link to="/about" className="btn btn-secondary">Know More About Us <FaArrowRight /></Link>
                    </div>
                    <div className="intro-image">
                        <div className="image-placeholder">Campus Image</div>
                    </div>
                </div>
            </section>

            {/* NOTICE BOARD SECTION */}
            <section className="section notice-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Read the Notice Board</h2>
                        <p className="subtitle">Stay updated with the latest announcements and important information</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="notice-grid">
                        {notices.map((notice, index) => (
                            <NoticeCard key={index} {...notice} department={notice.dept} />
                        ))}
                    </div>
                    <div className="text-center mt-lg">
                        <Link to="/notices" className="btn btn-secondary">See All Notices</Link>
                    </div>
                </div>
            </section>

            {/* PROGRAMS SECTION */}
            <section className="section programs-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Browse Programs By</h2>
                        <p className="subtitle">Discover programs your way. Sorted to suit your needs and goals.</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <ProgramCard key={index} {...program} description={program.desc} />
                        ))}
                    </div>
                    <div className="text-center mt-lg">
                        <Link to="/academics" className="btn btn-secondary">All Programs</Link>
                    </div>
                </div>
            </section>

            {/* SALIENT FEATURES SECTION */}
            <section className="section features-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>What Makes Ash'ari Special</h2>
                        <p className="subtitle">Nine pillars of excellence that define our educational approach</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} description={feature.desc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* MARQUEE SECTION */}
            <section className="marquee-section">
                <div className="container text-center mb-lg">
                    <h2>Where Knowledge Meets Innovation</h2>
                    <p className="subtitle">Nurturing minds and empowering future leaders.</p>
                </div>
                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* Repeat images to ensure smooth loop */}
                        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className="marquee-item">
                                <img src={`https://placehold.co/400x300/e0e0e0/888888?text=Campus+Photo+${item}`} alt="Campus Life" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-lg">
                    <Link to="/about" className="btn btn-secondary">Know More About Us</Link>
                </div>
            </section>

            {/* UPCOMING EVENTS SECTION */}
            <section className="section events-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Upcoming Events</h2>
                        <p className="subtitle">Stay informed and be part of what's next.</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="events-grid">
                        <EventCard
                            image="https://placehold.co/600x400/1a2e4a/ffffff?text=Convocation"
                            date="March 31, 2026"
                            time="10:00 AM"
                            title="Sanad Convocation 2026"
                            description="Celebrating academic achievements of our graduating students."
                        />
                        <EventCard
                            image="https://placehold.co/600x400/8c2a38/ffffff?text=Admission+Open"
                            date="April 15, 2026"
                            time="09:00 AM"
                            title="Admission Open House"
                            description="Visit our campus, meet our faculty, and learn about our unique system."
                        />
                        <EventCard
                            image="https://placehold.co/600x400/c4a162/ffffff?text=Cultural+Fest"
                            date="May 20, 2026"
                            time="04:00 PM"
                            title="Annual Cultural Festival"
                            description="Showcasing student talents in Arabic, English, and Urdu."
                        />
                    </div>
                    <div className="text-center mt-lg">
                        <Link to="/events" className="btn btn-secondary">Explore All Events</Link>
                    </div>
                </div>
            </section>

            {/* CAMPUS VIDEO SECTION */}
            <section className="video-section">
                <div className="video-bg-placeholder">
                    <div className="overlay"></div>
                    <div className="container video-content">
                        <h2>Watch What a Day in Classroom Looks Like</h2>
                        <button className="play-btn"><FaArrowRight /></button>
                        <Link to="/campus-life" className="btn btn-outline mt-lg">Virtual Campus Tour</Link>
                    </div>
                </div>
            </section>

            {/* STATISTICS SECTION */}
            <section className="section stats-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Journey in Numbers</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="stats-grid">
                        <StatCard number="150+" description="Students Enrolled" />
                        <StatCard number="230+" description="Alumni Network" />
                        <StatCard number="20+" description="Experienced Faculty" />
                        <StatCard number="30+" description="Years of Excellence" />
                        <StatCard number="8+" description="Programs Offered" />
                        <StatCard number="95%" description="Student Success Rate" />
                    </div>
                </div>
            </section>

            {/* NEWS SECTION (Placeholder) */}
            <section className="section news-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>News & Events</h2>
                        <p className="subtitle">Stay updated with the latest news and campus happenings.</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="news-grid">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="news-card-placeholder">
                                <div className="news-img"></div>
                                <div className="news-content">
                                    <h4>Latest News Headline {item}</h4>
                                    <p>Brief description of the news event happening on campus...</p>
                                    <Link to="/news" className="read-more">Read More <FaArrowRight /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>We're Here to Help You Shape the Future</h2>
                    <p>We're here to help you achieve your goals, overcome challenges, and make every step smoother along the way.</p>
                    <div className="cta-buttons">
                        <a href="https://forms.gle/zSmALfbm1ufjjhYu9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Enroll Now</a>
                        <Link to="/academics" className="btn btn-outline">View Programs</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
