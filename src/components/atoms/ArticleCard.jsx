import React from 'react';

const ArticleCard = ({ item, onClick, isModule = false }) => {
    const percent = isModule ? Math.round((item.completedDuration / item.totalDuration) * 100) : null;
    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={onClick}
        >
            <img
                src={item.imageURL}
                alt={item.name || item.title}
                className="w-full h-80 object-cover"
            />
            <div className="p-5">
                {isModule && (
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {item.totalDuration} phút
                        </span>
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${percent === 100 ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-800'
                                }`}
                        >
                            {percent === 100 ? 'Hoàn thành' : `${percent}%`}
                        </span>
                    </div>
                )}
                <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">{item.name || item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{item.description || item.content}</p>

                <button className="text-blue-600 font-sans font-medium hover:underline">
                    Đọc thêm
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;