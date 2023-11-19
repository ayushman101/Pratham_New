import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Discourse from "./components/Discourses/Discourse";
import Player from "./components/Video/Player";
import SingleDiscourse from "./components/SingleDiscourse/SingleDiscourse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/discourses" Component={Discourse} />
          <Route path="/discourses/video" Component={Player} />
          <Route path="/discourses/:id" element={<SingleDiscourse />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
