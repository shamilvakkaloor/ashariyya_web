import { FaChalkboardTeacher, FaBook, FaLanguage, FaLaptop, FaMicroscope } from 'react-icons/fa';
import './Faculty.css';

const Faculty = () => {
    const categories = [
        { icon: <FaBook />, title: "Islamic Studies Department", desc: "Foundational and advanced religious sciences including Fiqh, Hadith, and Tafseer." },
        { icon: <FaChalkboardTeacher />, title: "Modern Academics Department", desc: "Expert faculty for Commerce, Humanities, and General academic subjects." },
        { icon: <FaLanguage />, title: "Language Training Faculty", desc: "Specialized trainers for Arabic, English, Urdu, and Malayalam." },
        { icon: <FaLaptop />, title: "IT & Professional Courses", desc: "Instructors for DCA, Accounting, and Technical skills." },
        { icon: <FaMicroscope />, title: "Research & Development", desc: "Mentors guiding student research and scholarly publications." }
    ];

    return (
        <div className="faculty-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Meet Our Esteemed Faculty</h1>
                    <p className="breadcrumb">Home / About / Faculty</p>
                </div>
            </section>

            <section className="section faculty-intro">
                <div className="container text-center">
                    <p className="lead-text">
                        Our faculty comprises dedicated scholars and experienced educators committed to nurturing the next generation of leaders.
                        They are not just educators but mentors who guide students through their spiritual and academic journey.
                    </p>
                </div>
            </section>

            <section className="section faculty-categories">
                <div className="container">
                    <div className="category-grid">
                        {categories.map((cat, index) => (
                            <div key={index} className="category-card">
                                <div className="cat-icon">{cat.icon}</div>
                                <h3>{cat.title}</h3>
                                <p>{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section join-team">
                <div className="container text-center">
                    <h2>Interested in Teaching at Ash'ariyya?</h2>
                    <p>We are always looking for passionate educators to join our team.</p>
                    <button className="btn btn-primary mt-md">Join Our Academic Team</button>
                </div>
            </section>
        </div>
    );
};

export default Faculty;
