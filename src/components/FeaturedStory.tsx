import React from "react";

interface FeaturedStoryProps {
  title: string;
  image: string;
  summary: string;
  onClick: () => void;
}

export function FeaturedStory({
  title,
  image,
  summary,
  onClick,
}: FeaturedStoryProps) {
  return (
    <div
      onClick={onClick}
      className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer animate-fade-in"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 p-8">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-200 text-lg max-w-2xl">{summary}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Leer mas
          </button>
        </div>
      </div>
    </div>
  );
}
