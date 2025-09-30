import { useState } from 'react';
import FilterChipGroup from '../components/molecules/FilterChipGroup';
import FilterSection from '../components/organisms/FilterSection';
import CarouselSection from '../components/organisms/CarouselSection';
import ChallengeList from '../components/organisms/ChallengeList';
import ChallengeHubTemplate from '../components/templates/ChallengeHubTemplate';
import challengesData from '../data/challenges.json';

const ChallengeHubPage = () => {
    const [challenges] = useState(challengesData);
    const [durationFilter, setDurationFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const toggleFilter = (type, value) => {
        if (type === 'clear') {
            setDurationFilter([]);
            setCategoryFilter([]);
        } else if (type === 'duration') {
            setDurationFilter(prev =>
                prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
            );
        } else {
            setCategoryFilter(prev =>
                prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
            );
        }
    };

    const filteredChallenges = challenges.filter(challenge => {
        const matchDuration =
            durationFilter.length === 0 || durationFilter.includes(challenge.duration);
        const matchCategory =
            categoryFilter.length === 0 || categoryFilter.includes(challenge.category);
        return matchDuration && matchCategory;
    });

    return (
        <div className="w-full h-full bg-white overflow-y-auto">
            <ChallengeHubTemplate
                filterChips={
                    <FilterChipGroup
                        durationFilter={durationFilter}
                        categoryFilter={categoryFilter}
                        toggleFilter={toggleFilter}
                    />
                }
                filterSection={
                    <>
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="flex items-center gap-2 mb-4 px-4 py-2 bg-purple-300 text-white rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 6h18" />
                                <path d="M7 12h10" />
                                <path d="M10 18h4" />
                            </svg>
                            Filter
                        </button>
                        <FilterSection
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                            durationFilter={durationFilter}
                            categoryFilter={categoryFilter}
                            toggleFilter={toggleFilter}
                        />
                    </>
                }
                carouselSection={
                    <CarouselSection
                        challenges={filteredChallenges}
                        carouselIndex={carouselIndex}
                        setCarouselIndex={setCarouselIndex}
                    />
                }
                challengeList={<ChallengeList challenges={filteredChallenges} />}
            />
        </div>
    );
};

export default ChallengeHubPage;
