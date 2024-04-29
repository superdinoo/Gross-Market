import React from "react";
import style from "./App.module.css";
import Home from "./component/pages/Home";
import Form from "./component/pages/form/Form";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ThankYou from "./component/pages/thankYou/ThankYou";

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thankYou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
