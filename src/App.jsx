// components
import Sidebar from "./components/Sidebar";

// pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
