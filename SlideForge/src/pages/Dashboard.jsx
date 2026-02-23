import { useEffect, useState } from "react";
import SlideCard from "../components/SlideCard";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Presentations</h1>

      <div className="grid grid-cols-3 gap-6">
        {projects.map(project => (
          <SlideCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;