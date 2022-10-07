import { Grid } from "@mui/material";
import React from "react";
import gra from "../img/image-graphic-design.jpg";
import pho from "../img/image-photography.jpg";
type Props = {};

function Sec3({}: Props) {
  return (
    <>
      
      <Grid xs={6}>
        <img src={gra} />
      </Grid>
      <Grid xs={6}>
        <img src={pho} />
      </Grid>
    </>
  );
}

export default Sec3;
