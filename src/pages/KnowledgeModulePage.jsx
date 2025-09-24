import React, { useState, useEffect } from "react";
import wellnessCentreData from "../data/wellnessCentre.json";
import KnowledgeBreadcrumb from "../components/molecules/KnowledgeBreadcrumb";
import { useBreadcrumb } from "../contexts/BreadcrumbContext";

// Atom: ModuleCard
const ModuleCard = ({ module, onClick }) => {
    const percent = Math.round((module.completedDuration / module.totalDuration) * 100);
    return (
        <div
            className="rounded-2xl shadow-md p-0 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-gradient-to-br"
            style={{ backgroundImage: `linear-gradient(135deg, ${module.moduleColor1}, ${module.moduleColor2})` }}
            onClick={onClick}
        >
            <div className="flex flex-col h-full">
                <img src={module.imageURL} alt={module.name} className="w-full h-40 object-cover rounded-t-2xl" />
                <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold text-white mb-2">{module.name}</h2>
                    <p className="text-white text-sm mb-2 line-clamp-3">{module.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="bg-white/30 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Thời lượng: {module.totalDuration} phút
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${percent === 100 ? 'bg-green-400 text-white' : 'bg-yellow-300 text-gray-800'}`}>
                            {percent === 100 ? 'Hoàn thành' : `Đã học ${percent}%`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Molecule: ModuleList
const ModuleList = ({ modules, onSelectModule }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modules.map(module => (
            <ModuleCard key={module.id} module={module} onClick={() => onSelectModule(module)} />
        ))}
    </div>
);

// Molecule: CategoryList
const CategoryList = ({ categories, onSelectCategory }) => (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map(cat => (
            <button
                key={cat.id}
                className="bg-green-100 text-green-800 px-6 py-3 rounded-xl font-bold hover:bg-green-200 shadow"
                onClick={() => onSelectCategory(cat)}
            >
                {cat.name}
            </button>
        ))}
    </div>
);

// Organism: KnowledgeModuleOrganism
const KnowledgeModuleOrganism = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const { setBreadcrumb } = useBreadcrumb();

    // Cập nhật breadcrumb context
    useEffect(() => {
        setBreadcrumb({
            category: selectedCategory ? selectedCategory.name : null,
            topic: selectedModule ? selectedModule.name : null,
            article: selectedArticle ? selectedArticle.title : null,
        });
    }, [selectedCategory, selectedModule, selectedArticle, setBreadcrumb]);

    // Xử lý điều hướng breadcrumb
    const handleNavigate = (level) => {
        if (level === "home") {
            setSelectedCategory(null);
            setSelectedModule(null);
            setSelectedArticle(null);
        } else if (level === "category") {
            setSelectedModule(null);
            setSelectedArticle(null);
        } else if (level === "topic") {
            setSelectedArticle(null);
        }
    };

    // Hiển thị danh sách bài viết
    const renderArticles = () => (
        <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-[#8131ad]">Danh sách bài viết</h3>
            <div className="flex flex-col gap-3">
                {selectedModule.articles && selectedModule.articles.map(article => (
                    <button
                        key={article.id}
                        className="text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-100 shadow text-gray-800 font-semibold"
                        onClick={() => setSelectedArticle(article)}
                    >
                        {article.title}
                    </button>
                ))}
            </div>
        </div>
    );

    // Hiển thị chi tiết bài viết
    const renderArticleDetail = () => (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 mt-8 border border-[#8131ad]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#8131ad]">{selectedArticle.title}</h2>
            <p className="text-gray-700 mb-6 text-base">{selectedArticle.content}</p>
            <button className="bg-gradient-to-r from-[#8131ad] to-[#A3BFFA] text-white px-6 py-2 rounded-full font-bold shadow hover:scale-105 transition" onClick={() => setSelectedArticle(null)}>
                Quay lại chủ đề
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-[#f8fafc] p-0">
            <div className="w-full max-w-5xl mx-auto px-4 pt-8">
                <KnowledgeBreadcrumb
                    category={selectedCategory ? selectedCategory.name : null}
                    topic={selectedModule ? selectedModule.name : null}
                    article={selectedArticle ? selectedArticle.title : null}
                    onNavigate={handleNavigate}
                />
            </div>
            {!selectedCategory && (
                <div className="flex flex-col items-center justify-center py-8 px-4">
                    <img src="https://d37bukf1aia83y.cloudfront.net/wellness/plexus_dev/8975d640-89fb-4845-b301-b94f32a0c7bd_file.jpg" alt="Knowledge Illustration" className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-white" />
                    <h1 className="text-4xl font-sans font-bold text-[#1A3C6A] mb-4 text-center">Thư viện Kiến thức</h1>
                    <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
                        Khám phá các chủ đề về sức khỏe tinh thần, phát triển bản thân, giấc ngủ, stress, mối quan hệ và an toàn cá nhân. Mỗi chuyên mục đều có lời giải thích, hình ảnh minh họa và các bài học hữu ích giúp bạn chăm sóc bản thân tốt hơn mỗi ngày.
                    </p>
                    <div className="max-w-4xl w-full">
                        <CategoryList categories={wellnessCentreData} onSelectCategory={setSelectedCategory} />
                    </div>
                </div>
            )}
            {selectedCategory && !selectedModule && (
                <div className="max-w-3xl mx-auto mb-6 text-center py-8">
                    <img src={selectedCategory.modules[0]?.imageURL || "https://d37bukf1aia83y.cloudfront.net/wellness/plexus_dev/8975d640-89fb-4845-b301-b94f32a0c7bd_file.jpg"} alt={selectedCategory.name} className="w-32 h-32 object-cover rounded-2xl shadow-lg mx-auto mb-4 border-4 border-white" />
                    <h2 className="text-3xl font-bold mb-2 text-[#8131ad]">{selectedCategory.name}</h2>
                    <p className="text-gray-700 mb-6 text-base">Hãy chọn một chủ đề bên dưới để bắt đầu hành trình học tập và chăm sóc bản thân. Mỗi chủ đề đều có lời giải thích chi tiết và hình ảnh minh họa.</p>
                    <ModuleList modules={selectedCategory.modules} onSelectModule={setSelectedModule} />
                </div>
            )}
            {selectedModule && !selectedArticle && (
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 mt-8 border border-[#8131ad]/20">
                    <img src={selectedModule.imageURL} alt={selectedModule.name} className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg" />
                    <h2 className="text-2xl font-bold mb-4 text-[#8131ad]">{selectedModule.name}</h2>
                    <p className="text-gray-700 mb-6 text-base">{selectedModule.description}</p>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                            Thời lượng: {selectedModule.totalDuration} phút
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedModule.completedDuration === selectedModule.totalDuration ? 'bg-green-400 text-white' : 'bg-yellow-300 text-gray-800'}`}>
                            {selectedModule.completedDuration === selectedModule.totalDuration ? 'Hoàn thành' : `Đã học ${Math.round((selectedModule.completedDuration / selectedModule.totalDuration) * 100)}%`}
                        </span>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 mb-4 text-purple-800 text-sm">
                        <strong>Giải thích:</strong> Đây là chủ đề giúp bạn hiểu rõ hơn về vấn đề và cách chăm sóc bản thân. Hãy đọc kỹ và thực hành các mẹo, kỹ thuật được hướng dẫn để đạt hiệu quả tốt nhất.
                    </div>
                    {renderArticles()}
                    <button className="bg-gradient-to-r from-[#8131ad] to-[#A3BFFA] text-white px-6 py-2 rounded-full font-bold shadow hover:scale-105 transition" onClick={() => setSelectedModule(null)}>
                        Quay lại
                    </button>
                </div>
            )}
            {selectedArticle && renderArticleDetail()}
        </div>
    );
};

const KnowledgeModulePage = () => {
    return <KnowledgeModuleOrganism />;
};

export default KnowledgeModulePage;