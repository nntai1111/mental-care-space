import React, { useState } from 'react';

const sampleData = {
  moods: [
    { id: 1, emotion: "Vui vẻ", note: "Hôm nay cảm thấy tràn đầy năng lượng!", date: "2025-09-24" },
    { id: 2, emotion: "Lo lắng", note: "Cần thư giãn thêm", date: "2025-09-23" },
  ],
};

const MoodModule = () => {
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm xúc: ${emotion}\nGhi chú: ${note}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-white p-8">
      <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-8 text-center">Nhật ký Cảm xúc</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-[#1A3C6A] mb-4">Thêm cảm xúc mới</h2>
        <div className="space-y-4">
          <select
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
          >
            <option value="">Chọn cảm xúc</option>
            <option value="Vui vẻ">Vui vẻ 😊</option>
            <option value="Buồn">Buồn 😔</option>
            <option value="Lo lắng">Lo lắng 😟</option>
            <option value="Bình yên">Bình yên 😌</option>
          </select>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            placeholder="Ghi chú cảm xúc..."
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button
            className="w-full bg-[#F5A623] text-white px-4 py-3 rounded-full hover:bg-[#E69500] transition-colors"
            onClick={handleSubmit}
          >
            Lưu cảm xúc
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sampleData.moods.map(mood => (
          <div
            key={mood.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-[#1A3C6A]">{mood.emotion}</h2>
            <p className="text-gray-600 mt-2">{mood.note}</p>
            <p className="text-gray-600">Ngày: {mood.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodModule;