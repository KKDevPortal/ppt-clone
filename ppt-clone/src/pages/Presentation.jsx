import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Presentation() {
  const { projectId } = useParams();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${projectId}`)
      .then(res => res.json())
      .then(data => setSlides(data.slides));
  }, [projectId]);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!slides.length) return <div>Loading...</div>;

  const slide = slides[currentIndex];

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center p-10">
      
      <h1 className="text-4xl font-bold mb-6">{slide.slideTitle}</h1>
      <p className="mb-6">{slide.slideDescription}</p>

      <ul className="list-disc text-lg">
        {slide.slidePoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="absolute bottom-10 flex gap-6">
        <button
          onClick={prevSlide}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Previous
        </button>

        <button
          onClick={nextSlide}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Presentation;