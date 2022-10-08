import { Grid } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";

function App() {
  return (
    <>
      <Header />
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </Grid>
    </>
  );
}

export default App;
