import React from 'react';

const KnowledgeBreadcrumb = ({ category, topic, article, onNavigate }) => {
    return (
        <nav className="text-sm text-orange-600 dark:text-purple-200 font-bold max-w-6xl mx-auto px-4">
            <ul className="flex items-center space-x-2 font-sans">
                <li>
                    <button onClick={() => onNavigate('home')} className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-600 dark:after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                        Trang chủ
                    </button>
                </li>
                {category && (
                    <>
                        <li>/</li>
                        <li>
                            <button onClick={() => onNavigate('category')} className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-600 dark:after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                                {category}
                            </button>
                        </li>
                    </>
                )}
                {topic && (
                    <>
                        <li>/</li>
                        <li>
                            <button onClick={() => onNavigate('topic')} className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-600 dark:after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full">
                                {topic}
                            </button>
                        </li>
                    </>
                )}
                {article && (
                    <>
                        <li>/</li>
                        <li className="text-gray-900">{article}</li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default KnowledgeBreadcrumb;