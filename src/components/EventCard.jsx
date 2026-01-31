import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import './EventCard.css';

const EventCard = ({ image, date, time, title, description, link = "/campus-life" }) => {
    return (
        <div className="event-card">
            <div className="event-image">
                <img src={image} alt={title} />
                <div className="event-date-badge">
                    <span className="date-day">{date.split(' ')[1].replace(',', '')}</span>
                    <span className="date-month">{date.split(' ')[0]}</span>
                </div>
            </div>
            <div className="event-content">
                <div className="event-meta">
                    <span><FaClock /> {time}</span>
                </div>
                <h3 className="event-title">{title}</h3>
                <p className="event-desc">{description}</p>
                <Link to={link} className="event-btn">Join Now</Link>
            </div>
        </div>
    );
};

export default EventCard;
