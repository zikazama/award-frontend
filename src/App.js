import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import React from "react";
import ProtectedComponent from "../src/components/ProtectedComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedComponent>
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/filter"
          element={
            <ProtectedComponent>
              <FilterPage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
