import { Grid } from "@mui/material";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";

function App() {
  return (
    <>
      <Header />
     
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
      
      <Footer />
    </>
  );
}

export default App;
