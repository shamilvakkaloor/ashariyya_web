import './StatCard.css';

const StatCard = ({ number, description }) => {
    return (
        <div className="stat-card">
            <h3 className="stat-number">{number}</h3>
            <p className="stat-desc">{description}</p>
        </div>
    );
};

export default StatCard;
