import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import "./sunny.css";
import tran from "../img/image-transform.jpg";
function Sec1() {
  return (
    <>
      <Grid xs={6}>
          <Box className="con">
            <Typography variant="h3"><b>Transform your brand</b></Typography>
            <Typography variant="body1" marginTop={3} color="#A0A0A0 ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Typography>
            <br/>
            <Button>Learn More</Button>
          </Box>
      </Grid>
      <Grid xs={6}>
        <img src={tran} />
      </Grid>
    </>
  );
}

export default Sec1;
