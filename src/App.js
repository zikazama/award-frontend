import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/filter" element={<FilterPage />} />
      </Routes>
    </div>
  );
}

export default App;
