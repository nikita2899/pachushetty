import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGarmin } from "react-icons/si";
import { SiStrava } from "react-icons/si";

import "./Contact.css";
export const Contact = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links_div">
          <h4>Contact me at</h4>
          <p>+91 7022601346</p>
        </div>
        <div className="sb_footer-links_div">
          <h4>Email me at</h4>
          <p>pachu.v41@gmail.com</p>
        </div>
        <div className="sb_footer-links_div">
          <h4>Connect with me on</h4>
          <div className="socialmedia">
            <p>
              <a
                href="https://www.youtube.com/channel/UCIDyBMyx6ZgxoMmTUrR3PtA"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.facebook.com/travellerpachu/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.instagram.com/traveller_pachu_shetty/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://twitter.com/traveller_pachu"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/prasad-shetty-02083715a/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </p>
            <p>
              <a
                id="garmin"
                href="https://connect.garmin.com/modern/profile/ddf0d269-cec9-483f-a77e-cb51cb1389e1"
                target="_blank"
                rel="noreferrer"
              >
                <SiGarmin size={30} className="garmin" />
              </a>
            </p>
            <p>
              <a
                id="strava"
                href="https://www.strava.com/athletes/20613291"
                target="_blank"
                rel="noreferrer"
              >
                <SiStrava size={20} />
              </a>
            </p>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>
            @{new Date().getFullYear()} Traveller Pachu Shetty. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
