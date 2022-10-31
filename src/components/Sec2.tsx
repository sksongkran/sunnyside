import { Button, Typography } from "@mui/material";
import stan from "../img/image-stand-out.jpg";
import "./sunny.css";
type Props = {};

function Sec2({}: Props) {
  return (
    <div className="transform ">
      <div className="transform-img  desk">
        <img src={stan} alt="img" />
      </div>
      <div className="transform-text col">
        <Typography variant="h3">
          <b className="title">Stand out to the right audience</b>
        </Typography>
        <Typography className="desc" variant="body1" color="#A0A0A0 ">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </Typography>
        <Button className="btn">Learn More</Button>
      </div>
    </div>
  );
}

export default Sec2;
