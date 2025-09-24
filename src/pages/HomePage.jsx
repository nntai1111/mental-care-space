import React from 'react';

const sampleData = {
  progress: {
    meditationHours: 12,
    challengesCompleted: 5,
    moodEntries: 10,
    knowledgeRead: 8,
  },
  challenges: [
    { id: 1, title: "Thiền 5 phút mỗi ngày", duration: "3 ngày", completed: false },
  ],
  moods: [
    { id: 1, emotion: "Vui vẻ", note: "Hôm nay cảm thấy tràn đầy năng lượng!", date: "2025-09-24" },
  ],
  wellbeingTools: [
    { id: 1, name: "Thiền định", icon: "🧘" },
  ],
};

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-white p-8">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-8 text-center">Chào mừng đến với EmoSpace</h1>
      <p className="text-lg text-gray-600 text-center mb-12">Hành trình chăm sóc sức khỏe tinh thần của bạn bắt đầu từ đây!</p>

      {/* Tiến độ tổng quan */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-[#1A3C6A] mb-6">Tổng quan tiến độ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#F5A623]">{sampleData.progress.meditationHours}</p>
            <p className="text-gray-600">Giờ thiền</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#F5A623]">{sampleData.progress.challengesCompleted}</p>
            <p className="text-gray-600">Thử thách hoàn thành</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#F5A623]">{sampleData.progress.moodEntries}</p>
            <p className="text-gray-600">Nhật ký cảm xúc</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#F5A623]">{sampleData.progress.knowledgeRead}</p>
            <p className="text-gray-600">Bài viết đã đọc</p>
          </div>
        </div>
      </div>

      {/* Thử thách hôm nay */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-[#1A3C6A] mb-6">Thử thách hôm nay</h2>
        {sampleData.challenges.map(challenge => (
          <div key={challenge.id} className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#1A3C6A]">{challenge.title}</h3>
              <p className="text-gray-600">Thời gian: {challenge.duration}</p>
            </div>
            <button className="bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
              Bắt đầu
            </button>
          </div>
        ))}
      </div>

      {/* Cảm xúc gần đây */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-[#1A3C6A] mb-6">Cảm xúc gần đây</h2>
        {sampleData.moods.map(mood => (
          <div key={mood.id}>
            <h3 className="text-xl font-semibold text-[#1A3C6A]">{mood.emotion}</h3>
            <p className="text-gray-600">{mood.note} - {mood.date}</p>
          </div>
        ))}
      </div>

      {/* Công cụ gợi ý */}
      <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-[#1A3C6A] mb-6">Công cụ gợi ý</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sampleData.wellbeingTools.map(tool => (
            <div key={tool.id} className="text-center">
              <span className="text-5xl mb-4 block">{tool.icon}</span>
              <h3 className="text-xl font-semibold text-[#1A3C6A]">{tool.name}</h3>
              <button className="mt-4 bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
                Thử ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;