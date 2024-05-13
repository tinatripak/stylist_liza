import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import "./styles/index.scss";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="works" element={<Works />} />
    </Routes>
  </BrowserRouter>
);

export default App;
