import PropTypes from 'prop-types';
import Chip from '../atoms/Chip';

const FilterChipGroup = ({ durationFilter, categoryFilter, toggleFilter }) => {
    const durations = ['1 Day', '3 Days', '7 Days'];
    const categories = ['Meditation', 'Knowledge', 'Practice'];

    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {durations.map(duration => (
                <Chip
                    key={duration}
                    label={duration}
                    isSelected={durationFilter.includes(duration)}
                    onClick={() => toggleFilter('duration', duration)}
                    type="duration"
                />
            ))}
            {categories.map(category => (
                <Chip
                    key={category}
                    label={category}
                    isSelected={categoryFilter.includes(category)}
                    onClick={() => toggleFilter('category', category)}
                    type="category"
                />
            ))}
            <Chip
                label="Clear All"
                isSelected={false}
                onClick={() => toggleFilter('clear', null)}
                type="duration"
            />
        </div>
    );
};

FilterChipGroup.propTypes = {
    durationFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
    categoryFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
    toggleFilter: PropTypes.func.isRequired,
};

export default FilterChipGroup;