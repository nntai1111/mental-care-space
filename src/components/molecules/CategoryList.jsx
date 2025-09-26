import React from "react";

const CategoryList = ({ categories, onSelectCategory }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto px-4">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat)}
                    className="flex flex-col items-center w-80 bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
                >
                    <img
                        src={cat.imageURL}
                        alt={cat.name}
                        className="w-full h-60 object-cover rounded-xl mb-3"
                    />
                    <span className="text-gray-800 font-semibold text-lg text-center">
                        {cat.name}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
