import React, { useState, useEffect } from "react";
import KnowledgeBreadcrumb from "../components/molecules/KnowledgeBreadcrumb";
import { useBreadcrumb } from "../contexts/BreadcrumbContext";
import HeroSection from '../components/molecules/HeroSection';
import ArticleList from '../components/molecules/ArticleList';
import ArticleCard from '../components/atoms/ArticleCard';
import SubscriptionSection from '../components/organisms/SubscriptionSection';
import Button from '../components/atoms/Button';
import CategoryList from '../components/molecules/CategoryList';
import wellnessCentreData from '../data/wellnessCentre.json';
import { motion } from "framer-motion";

const ArticlesPage = () => {
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
    // Scroll lên đầu mỗi khi chuyển Category, Module, hoặc Article
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // mượt hơn
        });
    }, [selectedCategory, selectedModule, selectedArticle]);


    // Xử lý điều hướng breadcrumb
    const handleNavigate = (level) => {
        if (level === 'home') {
            setSelectedCategory(null);
            setSelectedModule(null);
            setSelectedArticle(null);
        } else if (level === 'category') {
            setSelectedModule(null);
            setSelectedArticle(null);
        } else if (level === 'topic') {
            setSelectedArticle(null);
        }
    };

    // Hiển thị danh sách bài viết trong mô-đun
    const renderArticles = () => (
        <div className="mt-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-sans font-bold mb-4 text-[#8131ad]">Danh sách bài viết</h3>
            <div className="grid grid-cols-1 gap-3">
                {selectedModule.articles && selectedModule.articles.length > 0 ? (
                    selectedModule.articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            item={article}
                            onClick={() => setSelectedArticle(article)}
                        />
                    ))
                ) : (
                    <p className="text-gray-600 font-sans">Chưa có bài viết nào trong mô-đun này.</p>
                )}
            </div>
        </div>
    );

    // Hiển thị chi tiết bài viết
    const renderArticleDetail = () => (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 mt-8 border border-[#8131ad]/20">
            <img
                src={selectedArticle.imageURL}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
            />
            <h2 className="text-3xl font-sans font-bold mb-4 text-[#8131ad]">{selectedArticle.title}</h2>
            <p className="text-gray-600 text-sm mb-2 font-sans">
                Tác giả: {selectedArticle.author} | {new Date(selectedArticle.publishedAt).toLocaleDateString('vi-VN')}
            </p>
            <p className="text-gray-700 mb-6 text-base leading-relaxed font-sans">{selectedArticle.content}</p>
            <Button onClick={() => setSelectedArticle(null)}>Quay lại mô-đun</Button>
        </div>
    );

    // Hiển thị chi tiết mô-đun
    const renderModuleDetail = () => (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 mt-8 border border-[#8131ad]/20">
            <img
                src={selectedModule.imageURL}
                alt={selectedModule.name}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
            />
            <h2 className="text-3xl font-sans font-bold mb-4 text-[#8131ad]">{selectedModule.name}</h2>
            <p className="text-gray-700 mb-6 text-base leading-relaxed font-sans">{selectedModule.description}</p>
            <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Thời lượng: {selectedModule.totalDuration} phút
                </span>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${selectedModule.completedDuration === selectedModule.totalDuration
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-400 text-gray-800'
                        }`}
                >
                    {selectedModule.completedDuration === selectedModule.totalDuration
                        ? 'Hoàn thành'
                        : `${Math.round((selectedModule.completedDuration / selectedModule.totalDuration) * 100)}%`}
                </span>
            </div>
            {renderArticles()}
            <Button onClick={() => setSelectedModule(null)} className="mt-4">Quay lại danh mục</Button>
        </div>
    );

    return (
        <div className="min-h-screen dark:bg-gray-800 p-2">
            <KnowledgeBreadcrumb
                category={selectedCategory ? selectedCategory.name : null}
                topic={selectedModule ? selectedModule.name : null}
                article={selectedArticle ? selectedArticle.title : null}
                onNavigate={handleNavigate}
            />
            {!selectedCategory && !selectedModule && !selectedArticle && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=""
                >
                    <section className="flex items-center justify-center">
                        <HeroSection
                            title="Bài viết về Sức khỏe Tâm lý"
                            description="EmoSpace Learning Hub là bộ học liệu trực tuyến được thiết kế ngắn gọn, dễ hiểu và thực tiễn. Tại đây, bạn có thể khám phá các chủ đề về sức khỏe tinh thần, quản lý cảm xúc, xây dựng thói quen lành mạnh, kỹ năng giao tiếp và phát triển bản thân."
                            img="/knowledge/emo1.png"
                        />
                    </section>
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Danh mục Chủ đề</h2>
                    </div>
                    <section className="min-h-screen snap-start flex items-center justify-center">

                        <CategoryList
                            categories={wellnessCentreData}
                            onSelectCategory={setSelectedCategory}
                        />
                    </section>

                    <section className="min-h-screen snap-start flex items-center justify-center">
                        <SubscriptionSection />
                    </section>
                </motion.div>

            )}
            {selectedCategory && !selectedModule && !selectedArticle && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=""
                >
                    <section className="flex items-center justify-center">
                        <HeroSection
                            title={selectedCategory.name}
                            description={`Khám phá các bài viết về ${selectedCategory.name.toLowerCase()} để bắt đầu hành trình chăm sóc sức khỏe tâm lý.`}
                            img={selectedCategory.imageURL}
                        />
                    </section>
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Danh sách Bài viết</h2>
                    </div>
                    <section className="min-h-screen snap-start flex items-center justify-center">

                        <ArticleList
                            modules={selectedCategory.modules}
                            onSelectModule={setSelectedModule}
                        />
                    </section>
                </motion.div>
            )}
            {selectedModule && !selectedArticle && renderModuleDetail()}
            {selectedArticle && renderArticleDetail()}
        </div>
    );
};

export default ArticlesPage;