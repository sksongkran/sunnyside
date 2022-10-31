import { Button, Grid, Paper, Stack, Typography, Box } from "@mui/material";
import React from "react";
import stan from "../img/image-stand-out.jpg";
import "./sunny.css";
type Props = {};

function Sec2({}: Props) {
  return (
    <>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={-0.5}
      >
        <Grid item xs={6} sm={6} md={6}>
          <img src={stan} />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Box marginLeft={20}>
            <Typography variant="h3">
              <b>
                Stand out to the right
                <br /> audience
              </b>
            </Typography>
            <Typography variant="body1" marginTop={3} color="#A0A0A0 ">
              Using a collaborative formula of designers, researchers,
              <br />
              photographers, videographers, and copywriters, we’ll
              <br /> build and extend your brand in digital places.
            </Typography>
            <br />
            <Button>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Sec2;
