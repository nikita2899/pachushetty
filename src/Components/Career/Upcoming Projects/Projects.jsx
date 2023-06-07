import React from "react";
import Header2 from "../../Different Header/Header2";
import "./Projects.css";
import { Contact } from "../../Contact Me/Contact";
import { useNavigate } from "react-router-dom";
import photo from "./photo_05.jpg";
import pinal from "./pinal parlekar.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="main-projects">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Support Me!
          </button>
          <div className="container container-projects">
            <div className="projects">
              <h2 className="projects-h2">Nanda Ghunti</h2>

              <div className="container">
                <p>
                  <p>
                    <strong>Height: </strong>6309 mt (20,699 ft)
                  </p>
                  <p>
                    <strong>First Ascent: </strong>1947
                  </p>
                  <p>
                    <strong>First Indian Ascent: </strong>1960
                  </p>
                  <p>
                    <strong>Location: </strong>Chamoli District in Garhwal
                    Himalayas, Uttarakhand, India
                  </p>
                  <p>
                    <strong>Grade: </strong>Difficult (Mountaineering
                    Expedition)
                  </p>
                  <p>
                    <strong>Base Camp: </strong>Homkund
                  </p>
                  Mt. Nanda Ghunti, also known as the "Veil of Goddess Nanda
                  Devi" is a peak in the Garhwal Himalayas lying in the Nanda
                  Devi National Park. It's an expedition meant only for
                  experienced trekkers and aspiring mountaineers with high
                  fitness levels and prior knowledge of roping up procedures and
                  the use of jumars and crampons.
                </p>
                <h3 className="projects-h3">Motive</h3>
                <p>
                  Mt. Nanda Ghunti is my most awaited project. I also undertook
                  this project because I believed doing so will also help to
                  promote Mission LiFE. Mission LiFE- launched by our honorable
                  PM Narendra Modi ji, the Lifestyle for Environment(LiFE)
                  initiative aims to encourage the adoption of sustainable
                  lifestyles in India and internationally to tackle the
                  challenges of environmental degradation and climate change. It
                  is designed to mobilise at least 1 billion Indians and other
                  global citizens to take individual and collective action for
                  protecting and preserving the environment in the period 2022
                  to 2027. After experiencing climbing many other moderate to
                  difficult treks, I decided to climb Mt. Nanda Ghunti, but
                  wait, there's a catch, I am going to do it in{" "}
                  <strong>Alpine style</strong>.
                </p>
                <h3 className="projects-h3">Alpine Style</h3>
                <p>
                  Now what is Alpine Style, you may ask. It is mountaineering in
                  a self-sufficient manner where you have to carry all your
                  food, shelter, and equipment as you climb. The Alpine-style
                  also means the refusal of fixed ropes, mountain guides,
                  high-altitude porters, supplemental oxygen and doping agents,
                  and portable hyperbaric bags. It is considered to be the most
                  "pure" form of mountaineering. Sounds dangerous, right? Well,
                  it is, but what is mountaineering without any risks or danger,
                  it is the thrill and the uncertainty that makes it more
                  alluring.
                </p>

                <h3 className="projects-h3">Climber's Intro</h3>
                <p>
                  A feat like this asks for a trekker who is{" "}
                  <strong>Experienced</strong>,<strong> Reliant</strong>, and
                  foremost, <strong>Fearless</strong>. I could not have found
                  someone more better and apt for this endeavor than{" "}
                  <strong>Pinal Parlekar</strong> who will be the co-expedition
                  leader along with me.
                </p>

                <div className="container">
                  <div class="row">
                    <div class="col-sm">
                      <figure class="figure">
                        <img
                          src={photo}
                          class="figure-img img-fluid rounded"
                          alt="pachu"
                        />
                        <figcaption class="figure-caption text-center">
                          Pachu Shetty
                        </figcaption>
                      </figure>
                    </div>
                    <div class="col-sm">
                      <p className="trekker-p">
                        Prasad, aka Pachu Shetty is an experienced mountaineer
                        and cyclist. He had undergone a number of trainings and
                        certifications in Rock Climbing and Mountaineering- from
                        Basic to Advanced level. He is also a professional
                        cyclist and holds the{" "}
                        <strong>'India Book of Records'</strong> for the{" "}
                        <strong>
                          'Fastest solo from Kashmir to Kanyakumari cycling
                          ride'
                        </strong>{" "}
                        which he completed in just 19 days (2018). Currently, he
                        is working as a Trek leader and Cycling leader for the
                        largest traveling company in India- Bikat Adventures.
                      </p>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <div class="row">
                    <div class="col-sm">
                      <figure class="figure">
                        <img
                          src={pinal}
                          class="figure-img img-fluid rounded"
                          alt="pinal"
                        />
                        <figcaption class="figure-caption text-center">
                          Pinal Parlekar
                        </figcaption>
                      </figure>
                    </div>
                    <div class="col-sm">
                      <p className="trekker-p">
                        Pinal Parlekar is an{" "}
                        <strong>India Achiever Book of Records</strong> and{" "}
                        <strong>Vajra World Records holder</strong> for Mission
                        7 sisters on Wheels. She became the first-ever woman who
                        covered all seven states and capitals of North-East
                        India on a cycle. She has also completed the cycling
                        expedition Thailand-Malaysia-Singapore - 3 women 3
                        countries which commenced on 30th Jan 2020- 28th Feb
                        2020. This was the first time such a unique cycling
                        expedition was carried out by an Indian woman.
                        <p>
                          Pinal Parlekar hails from Baroda,Gujarat and has
                          completed her Masters in Engineering from Gujarat
                          Technological University during the year 2011-2013.
                          Alongwith an engineering mind, she developed a keen
                          interest in Trekking and Hiking and over a period of
                          time, it slowly diverted her towards Mountaineering
                          sports. In a very short duration, it became her
                          passion and she took a career change. She undertook
                          various certifications and qualifications -
                          <ul>
                            <li>
                              Basic Mountaineering Course from HMI, Darjeeling
                              in May 2016
                            </li>
                            <li>
                              Basic Rock Climbing Course from Abu, Rajasthan in
                              April 2017
                            </li>
                            <li>
                              Advance Mountaineering Course from NIM,
                              Uttarakashi in May 2017
                            </li>
                          </ul>{" "}
                        </p>
                        <p>
                          Experience -
                          <ul>
                            <li>
                              Worked with Paragliding Association of Uttarakhand
                              (PAU) as an Event Coordinator since March 2016 to
                              2018
                            </li>
                            <li>
                              Outdoor trek leader (Freelancer) 2016 to 2019
                            </li>
                            <li>
                              Worked with Mahalaxmi Engineering Associates as an
                              Ass. HR & RF Dept. during 7 Jan 2014 to Dec 2015
                            </li>
                          </ul>
                        </p>
                        She also contributes to Nature preservation and works
                        towards Women's Empowerment.{" "}
                      </p>
                      <p>
                        {" "}
                        Follow her on her Instagram:{" "}
                        <a
                          href="https://www.instagram.com/pinal_2311/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <InstagramIcon />
                        </a>
                      </p>
                    </div>
                  </div>
                  <br />
                  <hr />
                </div>

                <h3 className="projects-h3">Final Notes...</h3>

                <p>
                  It's a lifelong dream for any experienced trekker to climb Mt.
                  Nanda Ghunti, and it's a costly process and expedition. I
                  would really appreciate it if you could help me in this
                  journey by sponsoring this expedition. Please find the{" "}
                  <strong>Support Me</strong> button at the top-right corner.
                  Thank you!
                </p>
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

export default Projects;
