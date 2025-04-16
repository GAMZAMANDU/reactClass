// src/App.jsx
import React from "react";
// 리액트 라우터의 필요한 컴포넌트들을 import
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// 페이지 컴포넌트 import
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const navigate = useNavigate();
  return (
    <>
      {/* 라우터를 감싸는 최상위 컴포넌트 */}
      {/* 내비게이션 바 - Link 컴포넌트를 사용하여 페이지 간 이동 */}
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>
      </nav>
      {/* Routes 컴포넌트 안에 각각의 Route를 정의 */}
      <Routes>
        {/* path는 경로, element는 해당 경로에서 렌더링할 컴포넌트 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </>
  );
}

export default App;
