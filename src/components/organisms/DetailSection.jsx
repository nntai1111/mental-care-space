import PropTypes from 'prop-types';
import DetailCard from '../molecules/DetailCard';

const DetailSection = ({ challenge }) => {
    const tasks = [
        'Day 1: Complete the first task',
        'Day 2: Continue with the second task',
        'Day 3: Finish the final task',
    ]; // Mock tasks, replace with real data

    return (
        <DetailCard
            title={challenge.title}
            description={challenge.description}
            duration={challenge.duration}
            tasks={tasks}
            id={challenge.id}
        />
    );
};

DetailSection.propTypes = {
    challenge: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
    }).isRequired,
};

export default DetailSection;