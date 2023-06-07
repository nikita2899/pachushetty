import React from "react";
import "./LandingPage.css";
import video from "./video/video.mp4";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGarmin } from "react-icons/si";
import { SiStrava } from "react-icons/si";
import Header from "../Header/Header";
import { Contact } from "../Contact Me/Contact";

function LandingPage() {
  return (
    <>
      <div>
        <section className="showcase">
          <Header />

          <video src={video} muted loop autoPlay></video>

          <div className="overlay"></div>

          <div className="text">
            <br></br>
            <br></br>
            <br></br>
            <h2>A Passionate Cyclist and Mountaineer</h2>
            <h1>Traveller Pachu Shetty</h1>
            <h3>Born To Travel !</h3>
            <p>#adventurewithpachu</p>
          </div>

          <ul className="social">
            <li>
              <a
                href="https://www.youtube.com/channel/UCIDyBMyx6ZgxoMmTUrR3PtA"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/travellerpachu/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/traveller_pachu_shetty/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/traveller_pachu"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/prasad-shetty-02083715a/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://connect.garmin.com/modern/profile/ddf0d269-cec9-483f-a77e-cb51cb1389e1"
                target="_blank"
                rel="noreferrer"
              >
                <SiGarmin size={40} />
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/20613291"
                target="_blank"
                rel="noreferrer"
              >
                <SiStrava />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <Contact />
    </>
  );
}

export default LandingPage;
