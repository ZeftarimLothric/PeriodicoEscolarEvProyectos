import React from "react";

export type Category =
  | "Todo"
  | "Deportes"
  | "Arte"
  | "Ciencia"
  | "Eventos"
  | "Opiniones";

interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: Category[] = [
  "Todo",
  "Deportes",
  "Arte",
  "Ciencia",
  "Eventos",
  "Opiniones",
];

export function CategoryTabs({
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pl-2 pb-2 pt-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all
            hover:bg-blue-600 hover:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
            ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
