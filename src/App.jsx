import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Discourse from "./components/Discourses/Discourse";
import Player from "./components/Video/Player";
import SingleDiscourse from "./components/SingleDiscourse/SingleDiscourse";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import Payment from "./components/Payment/Payment"
import Completion from "./components/Payment/Completion"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/discourses" Component={Discourse} />
          <Route path="/discourses/video" Component={Player} />
          <Route path="/discourses/:id" element={<SingleDiscourse />} />
	  <Route path="/coursePayment" Component={Payment} />
	  <Route path="/completion" Component={Completion} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
