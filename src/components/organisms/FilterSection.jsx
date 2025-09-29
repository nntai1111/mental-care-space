import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const FilterSection = ({ isOpen, onClose, durationFilter, categoryFilter, toggleFilter }) => {
    const durations = ['1 Day', '3 Days', '7 Days'];
    const categories = ['Meditation', 'Knowledge', 'Practice'];

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="fixed inset-x-0 bottom-0 bg-white p-4 rounded-t-2xl shadow-lg z-50"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Filter Challenges</h2>
                <button onClick={onClose} className="text-gray-600">Close</button>
            </div>
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Duration</h3>
                <div className="flex gap-2">
                    {durations.map(duration => (
                        <label key={duration} className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                checked={durationFilter.includes(duration)}
                                onChange={() => toggleFilter('duration', duration)}
                                className="h-4 w-4 text-yellow-500"
                            />
                            {duration}
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Category</h3>
                <div className="flex gap-2">
                    {categories.map(category => (
                        <label key={category} className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                checked={categoryFilter.includes(category)}
                                onChange={() => toggleFilter('category', category)}
                                className="h-4 w-4 text-purple-300"
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>
            <Button variant="primary" className="w-full" onClick={onClose}>
                Apply
            </Button>
        </motion.div>
    );
};

FilterSection.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    durationFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
    categoryFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
    toggleFilter: PropTypes.func.isRequired,
};

export default FilterSection;