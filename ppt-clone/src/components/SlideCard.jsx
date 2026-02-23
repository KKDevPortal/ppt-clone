import { useNavigate } from "react-router-dom";

function SlideCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
      <p className="text-gray-500 mb-4">
        {project.slides.length} Slides
      </p>

      <button
        onClick={() => navigate(`/presentation/${project.id}`)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Start
      </button>
    </div>
  );
}

export default SlideCard;