import React from "react";
import { Routes, Route } from "react-router";
import Result from "./Result";

const Main = () => {
  return (
    <div>
      main
      <Routes>
        <Route path="/:3" element={<div>hihi</div>} />
        <Route path="/:3/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default Main;
