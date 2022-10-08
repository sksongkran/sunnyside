import { Button, Grid, Paper, Stack, Typography, Box } from "@mui/material";
import React from "react";
import stan from "../img/image-stand-out.jpg";
import "./sunny.css";
type Props = {};

function Sec2({}: Props) {
  return (
    <>
      <Grid xs={6}>
        <img src={stan} />
      </Grid>
      <Grid xs={6}>
        <Box className="con">
          <Typography variant="h3"><b>Stand out to the right audience</b></Typography>
          <Typography variant="body1" marginTop={3} color="#A0A0A0 ">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </Typography>
          <br/>
          <Button>Learn More</Button>
        </Box>
      </Grid>
    </>
  );
}

export default Sec2;
