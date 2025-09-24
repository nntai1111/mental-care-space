import React from 'react';

const sampleData = {
  knowledge: [
    { id: 1, title: "Cách Thiền Hiệu Quả", category: "Thiền", read: true },
    { id: 2, title: "Tầm Quan Trọng của Giấc Ngủ", category: "Sức khỏe", read: false },
  ],
};

const KnowledgeModule = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-white p-8">
    <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-8 text-center">Thư viện Kiến thức</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {sampleData.knowledge.map(article => (
        <div
          key={article.id}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="text-xl font-semibold text-[#1A3C6A]">{article.title}</h2>
          <p className="text-gray-600 mt-2">Chuyên mục: {article.category}</p>
          <p className="text-gray-600">Trạng thái: {article.read ? "Đã đọc" : "Chưa đọc"}</p>
          <button className="mt-4 bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
            Đọc ngay
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default KnowledgeModule;