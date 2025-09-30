import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import DailyCheckInPage from '../../pages/DailyCheckInPage';
const DetailCard = ({ id, title, description, duration, tasks }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300?text=Challenge" alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-sm text-yellow-500 mb-4">{duration}</p>
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Tasks</h3>
                <ul className="list-disc pl-5">
                    {tasks.map((task, index) => (
                        <li key={index} className="text-sm text-gray-600">{task}</li>
                    ))}
                </ul>
            </div>
            <Button variant="primary" className="w-full" onClick={() => navigate(`/check-in/${id}`)}>
                Start Challenge
            </Button>
        </div>
    );
};

DetailCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailCard;