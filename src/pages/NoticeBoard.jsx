import { useState } from 'react';
import { FaCalendarAlt, FaBullhorn, FaFileAlt } from 'react-icons/fa';
import NoticeCard from '../components/NoticeCard';
import './NoticeBoard.css';

const NoticeBoard = () => {
    const [filter, setFilter] = useState('All');

    const notices = [
        { id: 1, type: 'Academic', date: 'Oct 24, 2026', title: 'Semester 1 Exam Schedule Released', brief: 'The examination timetable for the upcoming semester has been published. Students can download the PDF.' },
        { id: 2, type: 'Event', date: 'Oct 20, 2026', title: 'Mehrajan Arts Fest Registration', brief: 'Registration for the annual arts festival is now open. Contact your class representative.' },
        { id: 3, type: 'General', date: 'Oct 15, 2026', title: 'Library Renovation Notice', brief: 'The main library will be closed for renovation from Oct 25 to Nov 1.' },
        { id: 4, type: 'Academic', date: 'Sep 30, 2026', title: 'Assignment Submission Deadline', brief: 'Final date for submitting internal assignments extended to Oct 10.' },
        { id: 5, type: 'General', date: 'Sep 25, 2026', title: 'Hostel Admission List', brief: 'The second allotment list for hostel admission has been published.' },
        { id: 6, type: 'Event', date: 'Sep 10, 2026', title: 'Guest Lecture on Islamic Finance', brief: 'Dr. Ahmed will be delivering a lecture on modern Islamic banking.' }
    ];

    const filteredNotices = filter === 'All' ? notices : notices.filter(n => n.type === filter);

    return (
        <div className="notice-board-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Notice Board</h1>
                    <p className="breadcrumb">Home / Notices</p>
                </div>
            </section>

            <section className="section notice-board-container">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="notice-filters">
                        {['All', 'Academic', 'General', 'Event'].map(type => (
                            <button
                                key={type}
                                className={`filter-btn ${filter === type ? 'active' : ''}`}
                                onClick={() => setFilter(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Notice List */}
                    <div className="full-notice-grid">
                        {filteredNotices.map(notice => (
                            <NoticeCard
                                key={notice.id}
                                date={notice.date}
                                department={notice.type}
                                title={notice.title}
                                brief={notice.brief}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NoticeBoard;
