import { Button, Typography } from "@mui/material";
import "./sunny.css";
import tran from "../img/image-transform.jpg";
function Sec1() {
  return (
    <div className="transform">
      <div className="transform-text col">
        <Typography variant="h3">
          <b className="title">Transform your brand</b>
        </Typography>
        <Typography className="desc" variant="body1" color="#A0A0A0 ">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </Typography>
        <br />
        <Button className="btn">Learn More</Button>
      </div>
      <div className="transform-img  desk">
        <img src={tran} />
      </div>
    </div>
  );
}

export default Sec1;
