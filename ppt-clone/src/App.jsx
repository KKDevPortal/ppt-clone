import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Presentation from "./pages/Presentation";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/presentation/:projectId" element={<Presentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;