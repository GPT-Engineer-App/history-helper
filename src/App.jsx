import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Figures from "./pages/Figures.jsx";
import Timelines from "./pages/Timelines.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/figures" element={<Figures />} />
        <Route exact path="/timelines" element={<Timelines />} />
      </Routes>
    </Router>
  );
}

export default App;