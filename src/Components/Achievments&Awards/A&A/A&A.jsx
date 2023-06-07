import React from "react";
import Header2 from "../../Different Header/Header2";
import "./A&A.css";
import { Contact } from "../../Contact Me/Contact";
import Bunt from "./A2A/Bunt.jpg";
import IndiaBook from "./A2A/IndiaBook.jpg";
import Tolva from "./A2A/Tolva.jpg";

function A2A() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="main-a2a">
          <div className="container container-a2a">
            <div className="a2a">
              <div className="container">
                <h2 className="a2a-h2">Lifetime Achievements & Awards</h2>
                <br />
                <div className="a2a-img">
                  <h4 className="a2a-h4">India Book of Records</h4>
                  <img
                    src={IndiaBook}
                    class="figure-img img-fluid rounded"
                    alt="indiabook"
                  ></img>
                </div>
                <hr />
                <div className="a2a-img">
                  <h4 className="a2a-h4">
                    "Aikyatha" Youth Bunt's Talent-2018
                  </h4>
                  <img
                    src={Bunt}
                    class="figure-img img-fluid rounded"
                    alt="Bunt"
                  ></img>
                </div>
                <hr />
                <div className="a2a-img">
                  <h4 className="a2a-h4">Toulava Sadhaka</h4>
                  <img
                    src={Tolva}
                    class="figure-img img-fluid rounded"
                    alt="Tolva"
                  ></img>
                </div>
                <hr />
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

export default A2A;
