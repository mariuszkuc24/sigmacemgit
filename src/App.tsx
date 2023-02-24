import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Landing from "./components/pages/Landing";
import Pilot from "./components/pages/Pilot/Pilot";
import SkuChecker from "./components/Skuchecker/Skuchecker";
import Guides from "./components/pages/Guides";
import "./App.scss";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/pilot" element={<Pilot />}></Route>
          <Route path="/skuchecker" element={<SkuChecker />}></Route>
          <Route path="/guides" element={<Guides />}></Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
