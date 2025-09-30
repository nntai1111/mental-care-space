import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const ChallengeHubTemplate = ({
    filterChips,
    filterSection,
    carouselSection,
    challengeList,
}) => {
    return (
        <div className="min-h-screen p-4 font-sans ">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Challenges</h1>
                <Icon name="Bell" color="text-yellow-500" className="cursor-pointer" />
            </div>
            {filterChips}
            {filterSection}
            {carouselSection}
            {challengeList}
        </div>
    );
};

ChallengeHubTemplate.propTypes = {
    filterChips: PropTypes.node.isRequired,
    filterSection: PropTypes.node.isRequired,
    carouselSection: PropTypes.node.isRequired,
    challengeList: PropTypes.node.isRequired,
};

export default ChallengeHubTemplate;