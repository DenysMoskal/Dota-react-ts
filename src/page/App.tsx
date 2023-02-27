import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigatin from "@/components/Navigatin";
import AllHero from "./AllHero";
import InfoCard from "@/page/InfoCard";

const App = () => {
  return (
    <>
      <Navigatin />
      <Routes>
        <Route path="/" element={<AllHero />} />
        <Route path="/hero/:id" element={<InfoCard />} />
      </Routes>
    </>
  );
};

export default App;
