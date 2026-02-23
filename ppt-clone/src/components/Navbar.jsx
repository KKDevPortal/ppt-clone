import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Presentation } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-white bg-white/20"
      : "text-white/80 hover:bg-white/10";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Presentation size={24} className="text-white" />
          <span className="text-white font-bold text-xl tracking-wide">
            SlideForge
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${isActive("/")}`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white/80 hover:bg-white/10 transition"
          >
            <PlusCircle size={18} />
            New Project
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;