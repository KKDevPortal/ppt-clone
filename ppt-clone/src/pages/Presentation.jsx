import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Presentation() {
  const { projectId } = useParams();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setSlides(data.slides));
  }, [projectId]);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // 🎨 Different gradient themes
  const themes = [
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    "bg-gradient-to-r from-emerald-400 to-cyan-500",
    "bg-gradient-to-r from-orange-400 to-rose-500",
    "bg-gradient-to-r from-blue-500 to-indigo-700",
    "bg-gradient-to-r from-teal-400 to-blue-500",
    "bg-gradient-to-r from-fuchsia-500 to-purple-600",
  ];

  // Random theme per slide (stable)
  const currentTheme = useMemo(() => {
    return themes[currentIndex % themes.length];
  }, [currentIndex]);

  if (!slides.length)
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-semibold">
        Loading Presentation...
      </div>
    );

  const slide = slides[currentIndex];

  return (
    <div
      className={`h-screen w-screen ${currentTheme} flex items-center justify-center relative transition-all duration-700`}
    >
      {/* Slide Card */}
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-16 w-[70%] text-white text-center transition-all duration-500">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          {slide.slideTitle}
        </h1>

        {/* Description */}
        <p className="text-xl mb-8 opacity-90 italic">
          {slide.slideDescription}
        </p>

        {/* Points */}
        <ul className="space-y-4 text-lg text-left mx-auto max-w-2xl">
          {slide.slidePoints.map((point, index) => (
            <li
              key={index}
              className="bg-white/10 px-4 py-2 rounded-lg shadow-md hover:bg-white/20 transition"
            >
              • {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 text-white text-sm opacity-80">
        Slide {currentIndex + 1} / {slides.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-8 bg-white/20 hover:bg-white/40 p-4 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-8 bg-white/20 hover:bg-white/40 p-4 rounded-full shadow-lg transition"
      >
        <ChevronRight size={28} className="text-white" />
      </button>
    </div>
  );
}

export default Presentation;