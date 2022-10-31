import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import "./sunny.css";
import tran from "../img/image-transform.jpg";
function Sec1() {
  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={6}>
          <Box marginLeft={20}>
              <Typography variant="h3">
                <b>
                  Transform your
                  <br /> brand
                </b>
              </Typography>
              <Typography variant="body1" marginTop={3}  color="#A0A0A0 ">
                We are a full-service creative agency specializing in
                <br /> helping brands grow fast. Engage your clients through{" "}
                <br />
                compelling visuals that do most of the marketing for you.
              </Typography>
              <br />
              <Button >Learn More</Button>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <img src={tran} />
        </Grid>
      </Grid>
    </>
  );
}

export default Sec1;
