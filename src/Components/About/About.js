import React from "react";
import Header2 from "../Different Header/Header2";
import "./About.css";
import { Contact } from "../Contact Me/Contact";

import photo01 from "./images/photo01.jpg";
import photo02 from "./images/photo02.jpg";
import photo03 from "./images/photo03.jpg";

function About() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="main_about">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <p className="text_h2">About Pachu Shetty</p>

                <p>
                  I am Prasad Vijay Shetty (Pachu Shetty) from Nellikar village
                  of Moodbidri taluk, Karnataka. Since childhood, I was fond of
                  Drawing. After High school, I decided to turn my passion into
                  a profession and enrolled myself in 'Arena Animation
                  Institute(Mumbai)' to learn 3D animation. I completed my
                  Animation course in 2011, Following which I started working
                  with 'Maya Digital Studio', Mukta Arts, a company located in
                  Dada Saheb Phalke Film City, Mumbai. I worked as an animation
                  artist for the Indian cartoon series 'Motu Patlu' for 1.5
                  years. After this stint, I worked as a freelance artist till
                  2013.{" "}
                </p>

                <p>
                  Now comes the part where it all began, my love for trekking. I
                  decided to switch my professional line of work. I started
                  working as a Customer Executive at LG Call Centre. During my
                  tenure, I started to participate in Outdoor activities like
                  Camping and trekking. I often used to go out with my friends
                  and sometimes on solo adventures too. I felt my calling in
                  nature and mountains. Eventually, it became my passion and I
                  decided to pursue it as a career.
                </p>
              </div>
              <div class="col-sm">
                <img src={photo01} alt="photo1" />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-sm">
                <img src={photo02} alt="photo2" />
              </div>
              <div class="col-sm">
                <p>
                  I did a Rock climbing course from Swami Vivekananda Institute
                  of Mountaineering, Mount Abu, Rajasthan. I completed the Basic
                  Rock Climbing Course(2015), Advance Rock Climbing
                  Course(2015), and Coaching Rock Climbing Course(2016) with a
                  Grade of 'A'. Initially unsatisfied with the basic level
                  training, I decided to go for advanced level training and
                  joined the 'Jawahar Institute of Mountaineering and Winter
                  Sports(JIM&WS)', located in Pahalgam, Kashmir, and completed
                  the Basic Mountaineering Course(BMC). I completed my Advance
                  Mountaineering Course(AMC) from the 'Himalayan Mountaineering
                  Institute(HMI)'.{" "}
                </p>

                <p>
                  My thirst for adventure didn't stop there. Along with
                  Mountaineering, I trained myself in another sport as well-
                  Cycling. After training, I planned for Kashmir to Kanyakumari
                  with the 'Clean India Green India' Initiative in 2017 in which
                  I covered around 4000kms (K2K) in 60 days! It was a fully
                  self-supported cycling ride without any support vehicle. This
                  cycling tour helped me to grow in the community of adventurers
                  like me.
                </p>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-sm">
                <p>
                  After this, I started working as a Training leader with 'Crazy
                  Peaks', a private trekking company. I led many trekking groups
                  during my tenure at this company. Following this, I planned
                  the 'Solo Fastest Kashmir to Kanyakumari Cycling ride' again
                  in 2018 and covered the same distance in 19 days. It was a
                  historical achievement and I hold a place in the 'India Book
                  of Record' for this feat!
                </p>

                <p>
                  In 2019, I got the opportunity to work as a Trek leader and
                  Cycling leader at Bikat Adventures pvt ltd, the largest
                  traveling company in India, where I am currently working.
                </p>

                <p>
                  Apart from Trekking and Cycling, I am also passionate about
                  Snake rescuing, Bird watching and photography.
                </p>
              </div>

              <div class="col-sm">
                <img src={photo03} alt="photo3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer--pin">
        <Contact />
      </footer>
    </>
  );
}

export default About;
