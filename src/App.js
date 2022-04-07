import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import SigninPage from "./pages/SigninPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SigninPage />} />
        <Route exact path="/overview" element={<HomePage />} />
        <Route exact path="/videopage" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
