import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Nav from "./Nav";
import "./sunny.css";
import SouthIcon from "@mui/icons-material/South";
type Props = {};

function Header({}: Props) {
  return (
    <Box>
      <Grid>
        <Paper className="bgheader" variant="outlined" sx={{ minHeight: 700 }}>
          <Nav />
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={8}
          >
            <Typography sx={{ color: "white" }} variant="h3">
              WE ARE CREATIVES
            </Typography>
          </Grid>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={15}
          >
            <SouthIcon sx={{fontSize:100,color:"white"}}/>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}

export default Header;
