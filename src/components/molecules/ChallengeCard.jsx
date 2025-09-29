import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const ChallengeCard = ({ title, description, category, duration, image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-purple-200 rounded-lg shadow-sm p-4 flex items-center gap-4"
        >
            <img src={image} alt={title} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex-1">
                <h3 className="text-md font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-purple-300">{category}</span>
                    <span className="text-sm text-yellow-500">{duration}</span>
                </div>
            </div>
            <Button variant="primary">Start</Button>
        </motion.div>
    );
};

ChallengeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ChallengeCard;