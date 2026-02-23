import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Presentation from "./pages/Presentation";

function App() {
  return (
    <BrowserRouter>
      <div>
        <a href="/">Home</a>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/presentation/:projectId" element={<Presentation />} />
      </Routes>

      {/* Floating Branding */}
      {/* Floating Branding */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div
          className="
    bg-white 
    shadow-2xl 
    rounded-2xl 
    px-6 py-4 
    flex flex-col 
    text-lg 
    font-extrabold 
    text-gray-900 
    border border-gray-300
    tracking-wide
  "
        >
          <span className="hover:scale-105 transition-transform duration-200 cursor-pointer">
            @kkdevportal
          </span>
          <span className="hover:scale-105 transition-transform duration-200 cursor-pointer">
            @techtrekkertales
          </span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
