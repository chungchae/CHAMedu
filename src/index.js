import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/Main/MainPage";
import MentorLoginPage from "./pages/Login/MentorLoginPage";
import MenteeLoginPage from "./pages/Login/MenteeLoginPage";
import JoinPage from "./pages/Login/JoinPage";
import MentorPageMentee from "./pages/MentorPage/MentorPageMentee";
import MentorDetailPageMentee from "./pages/MentorDetailPage/MentorDetailPage_Mentee";
import MentorJoinPage from "./pages/Login/MentorJoinPage";
import MenteeJoinPage from "./pages/Login/MenteeJoinPage";
import WelcomePage from "./pages/Login/WelcomePage";
import MentorPage from "./pages/MyPage/MyPageMentor/MyPageMentor";
import MyPageMentorPage from "./pages/MyPage/MyPageMentor/MyPageMentor";
import MyPageMenteePage from "./pages/MyPage/MyPageMentee/MyPageMentee";
import PointChargePage from "./pages/Point/PointChargePage";
import MentorListPage from "./pages/MentorPage/MentorListPage";
import ChooseLogin from "./pages/Login/ChooseLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/fonts/font.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const role = sessionStorage.getItem("role");

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {role === "mentor" && (
          <>
            <Route path='/user/mentor' element={<MentorPageMentee />} />
            <Route path='/user/mypage' element={<MyPageMentorPage />} />
          </>
        )}
        {role === "mentee" && (
          <>
            <Route path='/user/mentor' element={<MentorPageMentee />} />
            <Route path='/user/mypage' element={<MyPageMenteePage />} />
          </>
        )}
        <Route path='/' element={<MainPage />} />
        <Route path='/user/mentor' element={<MentorPageMentee />} />
        <Route
          path='/user/mentor/:mentorKey'
          element={<MentorDetailPageMentee />}
        />
        <Route path='/user/login' element={<ChooseLogin />} />
        <Route path='/user/login/mentor' element={<MentorLoginPage />} />
        <Route path='/user/login/mentee' element={<MenteeLoginPage />} />

        <Route path='/user/join' element={<JoinPage />} />
        <Route path='/mentor/join' element={<MentorJoinPage />} />
        <Route path='/mentee/join' element={<MenteeJoinPage />} />
        <Route path='/welcome/join' element={<WelcomePage />} />
        <Route path='/mentor/request' element={<MentorPage />} />
        <Route path='/mypage/mentor' element={<MyPageMentorPage />} />
        <Route path='/mypage/mentee' element={<MyPageMenteePage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/user/mentor' element={<MentorPageMentee />} />
        <Route
          path='/user/mentor/:mentorKey'
          element={<MentorDetailPageMentee />}
        />
        <Route path='/user/join' element={<JoinPage />} />
        <Route path='/mentor/join' element={<MentorJoinPage />} />
        <Route path='/mentee/join' element={<MenteeJoinPage />} />
        <Route path='/welcome/join' element={<WelcomePage />} />
        <Route path='/mentor/request' element={<MentorPage />} />
        <Route path='/mentee/charge' element={<PointChargePage />} />
        <Route path='/mentorlist' element={<MentorListPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
