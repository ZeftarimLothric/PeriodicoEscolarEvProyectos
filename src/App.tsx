import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { FeaturedStory } from "./components/FeaturedStory";
import { NewsCard } from "./components/NewsCard";
import { CategoryTabs, Category } from "./components/CategoryTabs";

const newsData = [
  {
    id: 1,
    title: "El Equipo de Baloncesto llega a las Finales Estatales",
    category: "Deportes",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80",
    summary:
      "Nuestro equipo de baloncesto universitario hace historia con su racha ganadora sin...",
    author: "Alex Thompson",
    content: "Articulo completo aqui...",
  },
  {
    id: 2,
    title: "Estudiantes de Arte Ganan la Competencia Nacional",
    category: "Arte",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80",
    summary:
      "Los talentos locales brillan en la Exposición Nacional de Arte Juvenil con piezas...",
    author: "Maria Rodriguez",
    content: "Articulo completo aqui...",
  },
  {
    id: 3,
    title: "Se abre el Nuevo Laboratorio de Ciencias",
    category: "Ciencia",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    summary:
      "Instalaciones de última generación presentadas para mejorar la experiencia educativa STEM.",
    author: "Dr. James Chen",
    content: "Articulo completo aqui...",
  },
  {
    id: 4,
    title: "Drama Club's Spring Musical",
    category: "Arte",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80",
    summary:
      "Los estudiantes se preparan para una ambiciosa producción de 'The Phantom of the Opera'.",
    author: "Emma Watson",
    content: "Articulo completo aqui...",
  },
  {
    id: 5,
    title: "Robótica Equipo Innovación",
    category: "Ciencia",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    summary:
      "Nuestro equipo de robótica desarrolla un sistema de clasificación de reciclaje impulsado...",
    author: "David Park",
    content: "Articulo completo aqui...",
  },
  {
    id: 6,
    title: "Festival Anual de Comida",
    category: "Eventos",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
    summary: "La celebración cultural reúne diversas cocinas y tradiciones.",
    author: "Sofia Garcia",
    content: "Articulo completo aqui...",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todo");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const filteredNews =
    selectedCategory === "Todo"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  const handleArticleClick = (id: number) => {
    setSelectedArticle(id);
    // alert("Sin funcionalidad aun");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <FeaturedStory
          title="El Consejo Estudiantil lanza Iniciativa Ambiental"
          image="https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80"
          summary="Nuestra escuela da un paso audaz hacia la sostenibilidad con nuevos programas de reciclaje y espacios verdes."
          onClick={() => handleArticleClick(0)}
        />

        <div className="mt-12">
          <CategoryTabs
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              category={news.category as Category}
              image={news.image}
              summary={news.summary}
              author={news.author}
              onClick={() => handleArticleClick(news.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
