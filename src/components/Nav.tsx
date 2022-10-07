import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Stack, Typography } from "@mui/material";
type Props = {};

function Nav({}: Props) {
  return (
    <Box>
      <Grid container m={6}>
        <Grid xs={8} sm={8} md={8} display="flex" justifyContent="left" alignItems="left">
          <Typography variant="h5" sx={{color:"white"}}><b>sunnyside</b></Typography>
        </Grid>
        <Grid xs={4} sm={4} md={4}display="flex" justifyContent="right" alignItems="right">
          <Stack direction="row" spacing={2} >
            <Button sx={{borderRadius:5 ,color:"white"}} variant="text"><b>About</b></Button>
            <Button sx={{borderRadius:5 ,color:"white"}} variant="text"><b>Services</b></Button>
            <Button sx={{borderRadius:5 ,color:"white"}} variant="text"><b>Projects</b></Button>
            <Button sx={{borderRadius:5 ,color:"white"}} variant="text"><b>Contact</b></Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Nav;
