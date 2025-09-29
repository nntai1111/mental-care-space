import PropTypes from 'prop-types';
import ChallengeCard from '../molecules/ChallengeCard';

const ChallengeList = ({ challenges }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">All Challenges</h2>
            {challenges.length > 0 ? (
                challenges.map(challenge => (
                    <ChallengeCard
                        key={challenge.id}
                        title={challenge.title}
                        description={challenge.description}
                        category={challenge.category}
                        duration={challenge.duration}
                        image={challenge.image}
                    />
                ))
            ) : (
                <p className="text-gray-600">No challenges found. Try adjusting filters!</p>
            )}
        </div>
    );
};

ChallengeList.propTypes = {
    challenges: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ChallengeList;