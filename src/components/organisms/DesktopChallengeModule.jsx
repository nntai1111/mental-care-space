import React from 'react';

const sampleData = {
  challenges: [
    { id: 1, title: "Thiền 5 phút mỗi ngày", duration: "3 ngày", completed: false },
    { id: 2, title: "Viết nhật ký cảm xúc", duration: "7 ngày", completed: true },
  ],
};

const ChallengeModule = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-white p-8">
    <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-8 text-center">Thử thách Sức khỏe Tinh thần</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {sampleData.challenges.map(challenge => (
        <div
          key={challenge.id}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="text-xl font-semibold text-[#1A3C6A]">{challenge.title}</h2>
          <p className="text-gray-600 mt-2">Thời gian: {challenge.duration}</p>
          <p className="text-gray-600">Trạng thái: {challenge.completed ? "Hoàn thành" : "Đang thực hiện"}</p>
          <button className="mt-4 bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
            {challenge.completed ? "Xem lại" : "Bắt đầu"}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ChallengeModule;