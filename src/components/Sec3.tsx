import { Grid, Typography } from "@mui/material";
import "./sunny.css";
type Props = {};

function Sec3({}: Props) {
  return (
    <>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} marginTop={-0.5}>
        <Grid item xs={6} sm={8} md={6}>
          <div className="bgcherry" style={{ height: 590 }}>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <Typography
                sx={{ color: "#27574F", marginTop: 45 }}
                variant="h3"
                className="sec3"
              >
                <b>Graphic Design</b>
              </Typography>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <Typography
                sx={{ color: "#27574F", marginTop: 5, marginBottom: 9 }}
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
        <Grid item xs={6} sm={8} md={6}>
          <div className="bgorang" style={{ height: 590 }}>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <Typography
                sx={{ color: "#175266", marginTop: 45 }}
                variant="h3"
                className="sec3"
              >
                <b>Photography</b>
              </Typography>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <Typography
                sx={{ color: "#175266", marginTop: 5, marginBottom: 9 }}
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
      </Grid>
    </>
  );
}

export default Sec3;
