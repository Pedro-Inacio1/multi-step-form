import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./components/MultiStepForm";

const Pages: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
