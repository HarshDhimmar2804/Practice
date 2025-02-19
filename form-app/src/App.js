import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Form from "./Form";
import Response from "./Response";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/response" element={<Response />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
