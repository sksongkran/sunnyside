import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import "./sunny.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
type Props = {};

function Footer({}: Props) {
  return (
    <div className="bgfoot">
      <Grid container direction="row" justifyContent="center">
        <Typography variant="h4" marginTop={10} sx={{ color: "#297365" }}>
          <b>sunnyside</b>
        </Typography>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop:5,
        }}
      >
        <Button sx={{ color: "#458D7D"}} size="large">
          <b>About</b>
        </Button>
        <Button sx={{ color: "#458D7D" }} size="large">
          <b>Services</b>
        </Button>
        <Button sx={{ color: "#458D7D" }} size="large">
          <b>Projects</b>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop:10,
        }}
      >
        <IconButton sx={{ color: "#458D7D"}}>
          <FacebookIcon/>
        </IconButton>
        <IconButton sx={{ color: "#458D7D" }}>
        <InstagramIcon/>
        </IconButton>
        <IconButton sx={{ color: "#458D7D" }}>
        <TwitterIcon/>
        </IconButton>
        <IconButton sx={{ color: "#458D7D" }}>
        <PinterestIcon/>
        </IconButton>
      </Box>
    </div>
  );
}

export default Footer;
