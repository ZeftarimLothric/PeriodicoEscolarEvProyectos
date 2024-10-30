import React, { useState } from "react";
import { Menu, Search, Bell, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Nuevo articulo de deportes." },
    { id: 2, text: "Tu historia puede ser el futuro!" },
    { id: 3, text: "Tienes nuevos comentarios en tu post." },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
            </button>
            <h1 className="ml-4 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduPulse
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Search className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <Bell className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <p className="text-sm text-gray-600">
                        {notification.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="border-t animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Ultimas Noticias",
                "Deportes",
                "Arte & Cultura",
                "Ciencias & Tech",
                "Eventos",
                "Opinion",
                "Sobre nosotos",
                "Contactanos",
              ].map((item) => (
                <button
                  key={item}
                  className="text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
