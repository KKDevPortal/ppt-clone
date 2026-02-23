import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

function SlideCard({ project }) {
  const navigate = useNavigate();

  // Different soft gradient themes for cards
  const gradients = [
    "from-indigo-500 to-purple-600",
    "from-emerald-400 to-cyan-500",
    "from-orange-400 to-rose-500",
    "from-blue-500 to-indigo-700",
    "from-fuchsia-500 to-purple-600",
  ];

  const theme = gradients[project.id % gradients.length];

  return (
    <div className="w-80 h-64 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col justify-between">
      {/* Top Gradient Preview */}
      <div
        className={`h-24 bg-gradient-to-r ${theme} flex items-center justify-center`}
      >
        <h2 className="text-white text-lg font-bold tracking-wide">
          {project.name}
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Slide Count */}
        <div>
          <p className="text-gray-500 text-sm mb-2">Total Slides</p>
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {project.slides.length} Slides
          </span>
        </div>

        {/* Start Button */}
        <button
          onClick={() => navigate(`/presentation/${project.id}`)}
          className="mt-6 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          <Play size={18} />
          Start Presentation
        </button>
      </div>
    </div>
  );
}

export default SlideCard;
