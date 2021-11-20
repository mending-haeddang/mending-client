import React from "react";
import { Routes, Route } from "react-router";
const Main = () => {
  return (
    <div>
      main
      <Routes>
        <Route path="/:3" element={<div>hihi</div>} />
        <Route path="/:3/result" element={<div>result</div>} />
      </Routes>
    </div>
  );
};

export default Main;
