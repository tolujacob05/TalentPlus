import React from "react";
import "./App.css";
import Class from "./components/classes/Class";
import Frontpage from "./components/Frontpage/Frontpage";
import Logo from "./components/logos/Logo";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Frontpage />
        <Logo />
        <Class />
      </div>
    </>
  )
}

export default App;