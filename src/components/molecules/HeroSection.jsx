import { motion } from "framer-motion";
import Button from "../atoms/Button";
const HeroSection = ({ title, description, img, button }) => {
    return (
        <div className="h-screen flex flex-col md:flex-row items-start justify-center gap-x-20 px-8 pt-24">
            <div className="max-w-xl md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-100 mb-8">
                    {description}
                </p>
                {button && (
                    <motion.div
                        animate={button.animate || { y: [0, -10, 0] }}
                        transition={button.transition || { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Button
                            type="button"
                            onClick={button.onClick}
                            className="flex items-center justify-center px-4 py-2 bg-[#8131ad] text-white rounded-full hover:bg-[#6b287f] transition-colors duration-300"
                        >
                            <svg
                                className="w-6 h-6 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            {button.label}
                        </Button>
                    </motion.div>
                )}
            </div>
            <div className="md:w-1/3 w-full">
                <img
                    src={img}
                    alt="Hero Illustration"
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default HeroSection;