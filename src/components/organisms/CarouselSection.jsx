import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const CarouselSection = ({ challenges, carouselIndex, setCarouselIndex }) => {
    const nextSlide = () => {
        setCarouselIndex(prev => (prev + 1) % challenges.length);
    };
    const prevSlide = () => {
        setCarouselIndex(prev => (prev - 1 + challenges.length) % challenges.length);
    };

    return (
        <div className="relative mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Recommended</h2>
            <div className="overflow-hidden">
                <motion.div
                    animate={{ x: `-${carouselIndex * 100}%` }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="flex"
                >
                    {challenges.length > 0 ? (
                        challenges.map(challenge => (
                            <div key={challenge.id} className="min-w-full p-2">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white border border-purple-200 rounded-lg shadow-sm p-4"
                                >
                                    <img
                                        src={challenge.image}
                                        alt={challenge.title}
                                        className="w-full h-32 object-cover rounded-lg mb-2"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800">{challenge.title}</h3>
                                    <p className="text-sm text-gray-600">{challenge.description}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm text-purple-300">{challenge.category}</span>
                                        <span className="text-sm text-yellow-500">{challenge.duration}</span>
                                    </div>
                                    <Button variant="primary" className="mt-2 w-full">
                                        Start Challenge
                                    </Button>
                                </motion.div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No challenges found. Try adjusting filters!</p>
                    )}
                </motion.div>
            </div>
            {challenges.length > 1 && (
                <>
                    <Button
                        variant="secondary"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
                        onClick={prevSlide}
                    >
                        <Icon name="ChevronLeft" size={20} color="text-white" />
                    </Button>
                    <Button
                        variant="secondary"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
                        onClick={nextSlide}
                    >
                        <Icon name="ChevronRight" size={20} color="text-white" />
                    </Button>
                </>
            )}
        </div>
    );
};

CarouselSection.propTypes = {
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
    carouselIndex: PropTypes.number.isRequired,
    setCarouselIndex: PropTypes.func.isRequired,
};

export default CarouselSection;