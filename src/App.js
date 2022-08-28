import React from "react";
import "./App.css";
import Header from "./Header/Header";
import InlineBox from "./InlineBox/InlineBox";

const App = () => {
  return <div className="App">
    <>
    <div className="general-box">
    <Header/>
    <InlineBox/>
    </div>
    </>
  </div>;
};

export default App;
