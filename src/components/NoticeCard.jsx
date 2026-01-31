import { FaCalendarAlt, FaTag } from 'react-icons/fa';
import './NoticeCard.css';

const NoticeCard = ({ date, department, title, brief }) => {
    return (
        <div className="notice-card">
            <div className="notice-meta">
                <span className="notice-date"><FaCalendarAlt /> {date}</span>
                <span className="notice-dept"><FaTag /> {department}</span>
            </div>
            <h3 className="notice-title">{title}</h3>
            <p className="notice-brief">{brief}</p>
            <button className="notice-link">Read More</button>
        </div>
    );
};

export default NoticeCard;
