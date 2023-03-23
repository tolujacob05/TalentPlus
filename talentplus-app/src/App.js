import React from "react";
import "./App.css";
import Frontpage from "./components/Frontpage/Frontpage";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Frontpage />
      </div>
    </>
  )
}

export default App;