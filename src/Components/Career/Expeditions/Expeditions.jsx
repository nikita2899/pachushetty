import React from "react";
import Header2 from "../../Different Header/Header2";
import "./Expeditions.css";
import { Contact } from "../../Contact Me/Contact";
import photo01 from "./Satopanth_images/photo_01.jpg";
import photo02 from "./Satopanth_images/photo_02.jpg";
import photo03 from "./Satopanth_images/photo_03.jpg";
import photo04 from "./Satopanth_images/photo_04.jpg";
import photo05 from "./Satopanth_images/photo_05.jpg";
import photo06 from "./Satopanth_images/photo_06.jpg";
import image01 from "./KangYatse_images/photo_01.jpg";
import image03 from "./KangYatse_images/photo_03.jpg";

function Expeditions() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="main-expedition">
          <div className="container container-expedition">
            <div className="expedition-p">
              <h2 className="text-h2">Kang Yatse 2 Expedition</h2>
              <p>
                <b>Year Completed :</b> 2022 (2 times)
              </p>
              <p>
                <b>No of days of Expedition :</b> 12
              </p>
              <p>
                <b>No of team members :</b> 15
              </p>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <p>
                      It felt surreal, time stood still as the realization of me
                      being atop a 6000+ mt altitude mountain sunked in. No
                      words could describe that moment, that blissful moment
                      when you feel one with the mountain.
                    </p>
                    <p>
                      {" "}
                      When all these days of surviving in the cold, pushing
                      yourself each day, feeling proud of the progress you had
                      made and being determined to climb the rest of the
                      distance, made you realize what a human body is capable of
                      once it sets its mind onto something.
                    </p>
                    <p>
                      {" "}
                      Being at the top of Kang yatse 2, I felt humbled and at
                      peace. I emerged as a completely different person, after
                      this expedition. It prepared me for all the future
                      expeditions to come.
                    </p>
                  </div>
                  <div class="col-sm">
                    <div className="Expedition-carousel">
                      <div
                        id="carouselExampleFade01"
                        class="carousel slide carousel-fade"
                        data-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block w-100"
                              src={image01}
                              alt="First slide"
                            />
                          </div>

                          <div class="carousel-item">
                            <img
                              class="d-block w-100"
                              src={image03}
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carouselExampleFade01"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carouselExampleFade01"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="container container-expedition">
            <div className="expedition-p">
              <h2 className="text-h2">Mount Satopanth Expedition</h2>
              <p>
                <b>Year Completed :</b> 2021
              </p>
              <p>
                <b>No of days of Expedition :</b> 32
              </p>
              <p>
                <b>No of team members :</b> 5
              </p>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <p>
                      Do you know what it feels like to be at 7000+ mt altitude?
                      I do!
                    </p>

                    <p>
                      {" "}
                      Well you have to go through many obstacles and need all of
                      your will power, but what lies at the top makes all of it
                      worth the climb and the struggle. Mount Satopanth was my
                      first-ever 7000+ mt climb. Surviving is not so easy. There
                      was heavy snowfall in the area which made the climb even
                      more difficult than it already was. Yet me and my small
                      team didnt lost hope, and off we climbed ahead.{" "}
                    </p>
                    <p>
                      {" "}
                      Everything we endured on the climb, the cold nights, the
                      constant snowfall, was all worth it once we reached the
                      summit base camp. Although we weren't able to climb ahead
                      due to heavy snowfall and bad weather, we did reach the
                      summit base camp.{" "}
                    </p>
                    <p>
                      <i>
                        'One quick fact about Mount Satopanth - Many ambitious
                        trekkers who hope to climb Mount Everest, first climb
                        Mt. Satopanth as a pre-expedition experience.'
                      </i>
                    </p>
                    <p>
                      Even though this time we werent able to climb the summit
                      due to reasons beyond our control, I hope to achieve it
                      one day!
                    </p>
                  </div>
                  <div class="col-sm">
                    <div className="Expedition-carousel">
                      <div
                        id="carouselExampleFade"
                        class="carousel slide carousel-fade"
                        data-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div class="carousel-item">
                            <img
                              class="d-block w-100"
                              src={photo01}
                              alt="First"
                            />
                          </div>
                          <div class="carousel-item  active">
                            <img
                              class="d-block w-100"
                              src={photo02}
                              alt="Second"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100"
                              src={photo03}
                              alt="Third"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100"
                              src={photo04}
                              alt="Fourth"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100"
                              src={photo05}
                              alt="Fifth"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100"
                              src={photo06}
                              alt="Sixth slide"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carouselExampleFade"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carouselExampleFade"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Expeditions;
