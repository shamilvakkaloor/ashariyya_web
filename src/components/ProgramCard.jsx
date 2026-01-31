import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ icon, title, description, link = "/admission" }) => {
    return (
        <div className="program-card">
            <div className="program-icon">
                {icon}
            </div>
            <h3 className="program-title">{title}</h3>
            <p className="program-desc">{description}</p>
            <Link to={link} className="program-btn">Join Now</Link>
        </div>
    );
};

export default ProgramCard;
