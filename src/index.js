import React from "react";
import ReactDOM from "react-dom/client";
/* import "./index.css"; */
import MainPage from "./pages/Main/MainPage";
import MentorPageMentee from "./pages/MentorPage/MentorPageMentee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/fonts/font.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/user/mentor" element={<MentorPageMentee/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
