import React from "react";
import { Category } from "./CategoryTabs";

interface NewsCardProps {
  title: string;
  category: Category;
  image: string;
  summary: string;
  author: string;
  onClick: () => void;
}

export function NewsCard({
  title,
  category,
  image,
  summary,
  author,
  onClick,
}: NewsCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-fade-in"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{summary}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Por {author}</span>
        </div>
      </div>
    </div>
  );
}
