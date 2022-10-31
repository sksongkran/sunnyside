import React from "react";
import pic1 from "../img/image-gallery-milkbottles.jpg";
import pic2 from "../img/image-gallery-orange.jpg";
import pic3 from "../img/image-gallery-cone.jpg";
import pic4 from "../img/image-gallery-sugarcubes.jpg";
import { Grid } from "@mui/material";
type Props = {};

function Sec5({}: Props) {
  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <img src={pic1} />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <img src={pic2} />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <img src={pic3} />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <img src={pic4} />
        </Grid>
      </Grid>
    </>
  );
}

export default Sec5;
