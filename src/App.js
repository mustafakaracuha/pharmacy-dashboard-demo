import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/Home";

function App() {
  const { isDarkMode } = useSelector((state) => state.pharm);

  return (
    <div className={`w-full h-screen transition-all ease-in-out ${isDarkMode && 'dark'}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
