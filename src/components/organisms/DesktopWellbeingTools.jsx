import React from 'react';

const sampleData = {
  wellbeingTools: [
    { id: 1, name: "Thiền định", icon: "🧘" },
    { id: 2, name: "Hít thở sâu", icon: "🌬️" },
    { id: 3, name: "Lòng biết ơn", icon: "🙏" },
  ],
};

const WellbeingTools = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-white p-8">
    <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-8 text-center">Công cụ Sức khỏe Tinh thần</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {sampleData.wellbeingTools.map(tool => (
        <div
          key={tool.id}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
        >
          <span className="text-5xl mb-4 block">{tool.icon}</span>
          <h2 className="text-xl font-semibold text-[#1A3C6A]">{tool.name}</h2>
          <button className="mt-4 bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E69500] transition-colors">
            Thử ngay
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default WellbeingTools;