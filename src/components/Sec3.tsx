import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import gra from "../img/image-graphic-design.jpg";
import pho from "../img/image-photography.jpg";
import "./sunny.css";
type Props = {};

function Sec3({}: Props) {
  return (
    <>
      <Grid xs={6}>
        <div className="bgcherry" style={{minHeight:600}}>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Typography
              sx={{ color: "white", marginTop: 45 }}
              variant="h3"
              className="sec3"
            >
              <b>Graphic Design</b>
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Typography
              sx={{ color: "white", marginTop: 5, marginBottom: 9 }}
              variant="body1"
              className="sec3"
            >
              Great design makes you memorable. We deliver
              <br /> artwork that underscores your brand message <br />
              and captures potential clients’ attention.
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid xs={6}>
        <div className="bgorang">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Typography
              sx={{ color: "white", marginTop: 45 }}
              variant="h3"
              className="sec3"
            >
              <b>Photography</b>
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Typography
              sx={{ color: "white", marginTop: 5, marginBottom: 9 }}
              variant="body1"
              className="sec3"
            >
              Increase your credibility by getting the most <br />
              stunning, high-quality photos that improve your
              <br /> business image.
            </Typography>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default Sec3;
