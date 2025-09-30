import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

const CarouselSection = ({ challenges, carouselIndex, setCarouselIndex }) => {
    const nextSlide = () => {
        setCarouselIndex((prev) => (prev + 1) % challenges.length);
    };

    const prevSlide = () => {
        setCarouselIndex((prev) => (prev - 1 + challenges.length) % challenges.length);
    };

    return (
        <div className="relative mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Recommended
            </h2>

            <div className="relative flex justify-center items-center gap-6">
                {/* Các thẻ */}
                {challenges.length > 0 ? (
                    challenges.map((challenge, index) => {
                        const isActive = index === carouselIndex;
                        const isLeft =
                            (carouselIndex - 1 + challenges.length) % challenges.length === index;
                        const isRight = (carouselIndex + 1) % challenges.length === index;

                        if (!isActive && !isLeft && !isRight) return null;

                        if (isActive) {
                            return (
                                <motion.div
                                    key={challenge.id}
                                    animate={{ scale: 1.1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 120 }}
                                    className="w-72 cursor-pointer relative z-20"
                                >
                                    <div className="bg-white border-2 border-purple-400 rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={challenge.image}
                                            alt={challenge.title}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {challenge.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {challenge.description}
                                            </p>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-sm text-purple-400">
                                                    {challenge.category}
                                                </span>
                                                <span className="text-sm text-yellow-500">
                                                    {challenge.duration}
                                                </span>
                                            </div>
                                            <Button variant="primary" className="mt-2 w-full">
                                                Start Challenge
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }

                        return (
                            <div
                                key={challenge.id}
                                onClick={() => setCarouselIndex(index)}
                                className="w-60 cursor-pointer opacity-50 scale-90 transition-all"
                            >
                                <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                                    <img
                                        src={challenge.image}
                                        alt={challenge.title}
                                        className="w-full h-36 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-base font-semibold text-gray-700">
                                            {challenge.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-gray-600">No challenges found. Try adjusting filters!</p>
                )}

                {/* Nút mũi tên full height */}
                {challenges.length > 1 && (
                    <>
                        <Button
                            variant="secondary"
                            className="absolute left-0 top-0 h-full w-12 flex items-center justify-center bg-gray-900/70 hover:bg-gray-900 rounded-none"
                            onClick={prevSlide}
                        >
                            <Icon name="ChevronLeft" size={28} color="text-white" />
                        </Button>

                        <Button
                            variant="secondary"
                            className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-gray-900/70 hover:bg-gray-900 rounded-none"
                            onClick={nextSlide}
                        >
                            <Icon name="ChevronRight" size={28} color="text-white" />
                        </Button>
                    </>
                )}
            </div>
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
