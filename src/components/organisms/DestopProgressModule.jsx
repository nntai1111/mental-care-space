import React from 'react';

const sampleData = {
    progress: {
        meditationHours: 12,
        challengesCompleted: 5,
        moodEntries: 10,
        knowledgeRead: 8,
    },
};

const ProgressModule = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-white p-8">
        <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-8 text-center">Hồ sơ Phát triển</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#1A3C6A] mb-6">Tiến độ của bạn</h2>
            <div className="space-y-6">
                <div>
                    <p className="text-gray-600">Giờ thiền: {sampleData.progress.meditationHours} giờ</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                        <div className="bg-[#F5A623] h-3 rounded-full" style={{ width: `${Math.min(sampleData.progress.meditationHours * 5, 100)}%` }}></div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600">Thử thách hoàn thành: {sampleData.progress.challengesCompleted}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                        <div className="bg-[#F5A623] h-3 rounded-full" style={{ width: `${Math.min(sampleData.progress.challengesCompleted * 20, 100)}%` }}></div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600">Nhật ký cảm xúc: {sampleData.progress.moodEntries}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                        <div className="bg-[#F5A623] h-3 rounded-full" style={{ width: `${Math.min(sampleData.progress.moodEntries * 10, 100)}%` }}></div>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600">Bài viết đã đọc: {sampleData.progress.knowledgeRead}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                        <div className="bg-[#F5A623] h-3 rounded-full" style={{ width: `${Math.min(sampleData.progress.knowledgeRead * 10, 100)}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProgressModule;