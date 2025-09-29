
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const CheckInTemplate = ({ checkInSection }) => (
    <div className="min-h-screen bg-white p-4 font-sans">
        <div className="flex justify-between items-center mb-4">
            <Icon name="ArrowLeft" color="text-gray-800" className="cursor-pointer" />
            <h1 className="text-2xl font-bold text-gray-800">Daily Check-In</h1>
            <div className="w-6" /> {/* Placeholder for alignment */}
        </div>
        {checkInSection}
    </div>
);

CheckInTemplate.propTypes = {
    checkInSection: PropTypes.node.isRequired,
};

export default CheckInTemplate;