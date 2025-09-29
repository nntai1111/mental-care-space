import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const CompletionTemplate = ({ completionSection }) => {
    return (
        <div className="min-h-screen bg-white p-4 font-sans">
            <div className="flex justify-between items-center mb-4">
                <Icon name="ArrowLeft" color="text-gray-800" className="cursor-pointer" />
                <h1 className="text-2xl font-bold text-gray-800">Challenge Completed</h1>
                <div className="w-6" /> {/* Placeholder for alignment */}
            </div>
            {completionSection}
        </div>
    );
};

CompletionTemplate.propTypes = {
    completionSection: PropTypes.node.isRequired,
};

export default CompletionTemplate;