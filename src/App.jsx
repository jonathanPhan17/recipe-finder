import { Route, Routes } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
import Homepage from "./pages/Homepage";
import Favoritespage from "./pages/Favoritespage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favoritespage />} />
      </Routes>
    </div>
  );
}

export default App;
