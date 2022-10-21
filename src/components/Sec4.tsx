import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import "../components/sunny.css";
import emily from '../img/image-emily.jpg'
import thomas from '../img/image-thomas.jpg'
import jennie from '../img/image-jennie.jpg'
type Props = {};

function Sec4({}: Props) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <Typography
            variant="h5"
            gutterBottom
            marginTop={20}
            marginBottom={10}
            sx={{ color: "#9C9C9C" }}
          >
            <b> CLIENT TESTIMONIALS</b>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Avatar src={emily} sx={{height:60,width:60}} className="procen"/>
            <Typography sx={{ textAlign: "center" }} marginTop={5}>
              We put our trust in Sunnyside and they <br />
              delivered, making sure our needs were met <br /> and deadlines
              were always hit.
            </Typography>
            <Typography sx={{ textAlign: "center" }} marginTop={8}>
            Emily R.
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "12px" }} marginTop={1}>
            Marketing Director
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <Avatar src={thomas} sx={{height:60,width:60}} className="procen"/>
            <Typography sx={{ textAlign: "center" }} marginTop={5}>
              Sunnyside’s enthusiasm coupled with their <br />
              keen interest in our brand’s success made it <br />a satisfying
              and enjoyable experience.
            </Typography>
            <Typography sx={{ textAlign: "center" }} marginTop={8}>
          Thomas S.
            </Typography>
            <Typography sx={{ textAlign: "center" , fontSize: "12px"  }} marginTop={1}>
            Chief Operating Officer
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4} marginBottom={15}>
          <Avatar src={jennie} sx={{height:60,width:60}} className="procen"/>
            <Typography sx={{ textAlign: "center" }} marginTop={5}>
              Incredible end result! Our sales increased
              <br />
              over 400% when we worked with Sunnyside.
              <br />
              Highly recommended!
            </Typography>
            <Typography sx={{ textAlign: "center" }} marginTop={8}>
            Jennie F.
            </Typography>
            <Typography sx={{ textAlign: "center" , fontSize: "12px"  }} marginTop={1}>
            Business Owner
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Sec4;
