import { FaArrowRight } from 'react-icons/fa';
import './Exam.css';

const Exam = () => {
    return (
        <div className="exam-page">
            <section className="section page-header-section glass-bg">
                <div className="container text-center">
                    <h1 className="page-title text-gradient">Examination Results</h1>
                    <p className="subtitle">Check your latest exam results and academic progress.</p>
                </div>
            </section>

            <section className="section exam-content-section">
                <div className="container">
                    <div className="exam-cards-container">
                        <div className="exam-card glass">
                            <h2>Muthawal Exam 2026</h2>
                            <p>The results for the Muthawal Examination 2026 have been published.</p>
                            <a 
                                href="https://script.google.com/a/~/macros/s/AKfycbzDqtGMo9ZxfUSlfiiIP3bOligJDrlOI3qA_-kJgpSMlZHc3O3vVs8vpbk71bkhRooB/exec" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary"
                            >
                                View Result <FaArrowRight style={{ marginLeft: '8px' }}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exam;
