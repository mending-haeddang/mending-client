import React from "react";
import { Routes, Route } from "react-router-dom";
import Result from "./Result";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path=":id/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default Main;
