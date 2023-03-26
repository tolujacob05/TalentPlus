import React from "react";
import "./App.css";
import Class from "./components/classes/Class";
import Comment from "./components/comments/Comment";
import Connect from "./components/connect/Connect";
import Course from "./components/courses/Course";
import Footer from "./components/footer/Footer";
import Frontpage from "./components/Frontpage/Frontpage";
import Logo from "./components/logos/Logo";
import Navbar from "./components/Navbar/Navbar";
import Question from "./components/questions/Question";
import Reason from "./components/reason/Reason";


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Frontpage />
        <Logo />
        <Class />
        <Reason />
        <Course />
        <Comment />
        <Connect />
        <Question />
        <Footer />
      </div>
    </>
  )
}

export default App;