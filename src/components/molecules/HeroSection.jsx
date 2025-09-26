const HeroSection = ({ title, description, img }) => {
    return (
        <div className="h-screen flex flex-col md:flex-row items-start justify-center gap-x-20 px-8 pt-24">
            {/* Text bên trái */}
            <div className="max-w-xl md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-100 mb-8">
                    {description}
                </p>
            </div>

            {/* Ảnh minh họa */}
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
export default HeroSection