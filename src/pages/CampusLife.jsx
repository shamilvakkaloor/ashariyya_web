import { FaClock, FaBed, FaUtensils, FaMosque, FaBookReader, FaLaptop } from 'react-icons/fa';
import './CampusLife.css';

const CampusLife = () => {
    return (
        <div className="campus-life-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Experience Life at Ash'ari</h1>
                    <p className="breadcrumb">Home / Campus Life</p>
                </div>
            </section>

            {/* CAMPUS TOUR VIDEO */}
            <section className="section tour-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Virtual Campus Tour</h2>
                        <div className="divider center"></div>
                    </div>
                    <div className="video-container">
                        <div className="video-placeholder">
                            <div className="play-button-overlay">▶</div>
                            <span>Watch Campus Video</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* DAILY ROUTINE */}
            <section className="section routine-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>A Day in the Life</h2>
                        <p className="subtitle">Discipline and devotion guide our daily schedule.</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="routine-timeline">
                        {[
                            { time: "04:30 AM", title: "Tahajjud & Fajr", desc: "Spiritual start to the day" },
                            { time: "06:00 AM", title: "Quran Recitation", desc: "Hifz and revision circles" },
                            { time: "08:00 AM", title: "Academic Classes", desc: "University and Dars subjects" },
                            { time: "01:00 PM", title: "Zuhr & Lunch", desc: "Congregational prayer and meal break" },
                            { time: "02:00 PM", title: "Afternoon Sessions", desc: "Continued studies / Rest" },
                            { time: "04:30 PM", title: "Asr & Sports", desc: "Physical activities and games" },
                            { time: "06:30 PM", title: "Maghrib & Dhikr", desc: "Evening prayers and remembrance" },
                            { time: "08:30 PM", title: "Dinner & Study", desc: "Self-study and preparation" }
                        ].map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="time-badge"><FaClock /> {item.time}</div>
                                <div className="timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FACILITIES */}
            <section className="section facilities-grid-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Campus Facilities</h2>
                    </div>
                    <div className="facilities-grid">
                        <div className="facility-card">
                            <FaMosque className="fac-icon" />
                            <h3>Central Mosque</h3>
                            <p>Spacious prayer hall for spiritual gatherings.</p>
                        </div>
                        <div className="facility-card">
                            <FaBookReader className="fac-icon" />
                            <h3>Grand Library</h3>
                            <p>Thousands of books in multiple languages.</p>
                        </div>
                        <div className="facility-card">
                            <FaBed className="fac-icon" />
                            <h3>Student Hostels</h3>
                            <p>Comfortable accommodation for all students.</p>
                        </div>
                        <div className="facility-card">
                            <FaUtensils className="fac-icon" />
                            <h3>Dining Hall</h3>
                            <p>Hygienic and nutritious meals served daily.</p>
                        </div>
                        <div className="facility-card">
                            <FaLaptop className="fac-icon" />
                            <h3>Computer Lab</h3>
                            <p>Modern IT infrastructure for digital learning.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MEHRAJAN GALLERY */}
            <section className="section mehrajan-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Mehrajan Arts Fest</h2>
                        <p className="subtitle">Celebrating talent and creativity.</p>
                        <div className="divider center"></div>
                    </div>
                    <div className="mehrajan-gallery">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="gallery-item">
                                <img src={`https://placehold.co/400x300/e0e0e0/888888?text=Fest+Photo+${item}`} alt="Mehrajan" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusLife;
