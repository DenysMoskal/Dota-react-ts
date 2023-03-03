import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigatin from "@/components/Navigatin";
import AllHero from "./AllHero";
import InfoCard from "@/page/InfoCard";
import FavoriteCard from "./FavoriteCard";

const App = () => {
  return (
    <>
      <Navigatin />
      <Routes>
        <Route path="/" element={<AllHero />} />
        <Route path="/hero/:id" element={<InfoCard />} />
        <Route path="/favorite" element={<FavoriteCard />} />
      </Routes>
    </>
  );
};

export default App;
