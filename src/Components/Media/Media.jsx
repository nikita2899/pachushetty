import React from "react";
import Header2 from "../Different Header/Header2";
import { Contact } from "../Contact Me/Contact";
import media01 from "./Images/media-01.png";
import media02 from "./Images/media-02.png";
import media03 from "./Images/media-03.png";

import "./Media.css";

function Media() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="main-media">
          <div className="container">
            <br />
            <h3>Media Mentions</h3>
            <h4>
              Below are the list of sources where Pachu Shetty has been
              mentioned.
            </h4>
            <div className="container">
              <div class="row">
                <div class="col-sm">
                  <a
                    href="https://megamedianews.com/cyclist-from-nellikaru-enters-limca-records/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure class="figure">
                      <img
                        src={media01}
                        class="figure-img img-fluid rounded"
                        alt="media01"
                      />
                      <figcaption class="figure-caption text-center">
                        Mega Media news
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    href="https://www.mangalorean.com/moodbidri-origin-prasad-shetty-enters-india-book-of-records-for-his-cycling-expeditions/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure class="figure">
                      <img
                        src={media02}
                        class="figure-img img-fluid rounded"
                        alt="media02"
                      />
                      <figcaption class="figure-caption text-center">
                        Manglorean
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    href="https://www.daijiworld.com/news/newsDisplay.aspx?newsID=510879"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure class="figure">
                      <img
                        src={media03}
                        class="figure-img img-fluid rounded"
                        alt="media03"
                      />
                      <figcaption class="figure-caption text-center">
                        DaijiWorld.com
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <br />
              <br />
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

export default Media;
