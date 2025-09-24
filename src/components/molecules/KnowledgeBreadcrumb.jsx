import React from "react";

function KnowledgeBreadcrumb({ category, topic, article, onNavigate }) {
    return (
        <nav className="flex items-center text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
                <li>
                    <button
                        className="text-blue-600 hover:underline font-semibold"
                        onClick={() => onNavigate("home")}
                    >
                        Articles
                    </button>
                </li>
                {category && (
                    <li>
                        <span className="mx-2 text-gray-400">/</span>
                        <button
                            className="text-blue-600 hover:underline font-semibold"
                            onClick={() => onNavigate("category")}
                        >
                            {category}
                        </button>
                    </li>
                )}
                {topic && (
                    <li>
                        <span className="mx-2 text-gray-400">/</span>
                        <button
                            className="text-blue-600 hover:underline font-semibold"
                            onClick={() => onNavigate("topic")}
                        >
                            {topic}
                        </button>
                    </li>
                )}
                {article && (
                    <li>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-900 font-bold">{article}</span>
                    </li>
                )}
            </ol>
        </nav>
    );
}

export default KnowledgeBreadcrumb;