import React from "react";
import { Routes, Route } from "react-router-dom";
import AllHeroPage from "./AllHeroPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllHeroPage />} />
    </Routes>
  );
};

export default App;
