import { Button, Grid, Paper, Stack, Typography,Box } from "@mui/material";
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
      <Paper className="papersize">
          <Box className="con">
            <Typography variant="h4">Transform your brand</Typography>
            <Typography variant="caption" marginTop={3} color="#A0A0A0 ">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Typography>
            <Button>Learn More</Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default Sec2;
