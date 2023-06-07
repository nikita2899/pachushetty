import React from "react";
import Header2 from "../../Different Header/Header2";
import "./Qualifications.css";
import { Contact } from "../../Contact Me/Contact";
import AMC from "./CERTIFICATES/AMC.jpg";
import ARC from "./CERTIFICATES/ARC.jpg";
import ArenaA from "./CERTIFICATES/Arena_Animation.jpg";
import BLS from "./CERTIFICATES/BLS.jpg";
import BMC from "./CERTIFICATES/BMC.jpg";
import CRC from "./CERTIFICATES/CRC.jpg";
import cycleM from "./CERTIFICATES/cycle_mechanic.jpg";
import cycleT from "./CERTIFICATES/cycle_technician.jpg";
import SnakeR from "./CERTIFICATES/Snake_Rescue.jpg";
import BRC from "./CERTIFICATES/BRC.jpg";

function Qualifications() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="main-qualification">
          <div className="container container-q">
            <div className="qualifications">
              <div className="container">
                <h2 className="quali-h2">Rock Climbing Certificates</h2>
                <br />
                <div className="img-div">
                  <h3 className="quali-h3">Basic Rock Climbing</h3>
                  <img
                    src={BRC}
                    class="figure-img img-fluid rounded"
                    alt="BRC"
                  />
                </div>
                <hr />
                <div className="img-div">
                  <h3 className="quali-h3">Advanced Rock Climbing</h3>
                  <img
                    src={ARC}
                    class="figure-img img-fluid rounded"
                    alt="ARC"
                  />
                </div>
                <hr />
                <div className="img-div">
                  <h3 className="quali-h3">Coaching Rock Climbing</h3>
                  <img
                    src={CRC}
                    class="figure-img img-fluid rounded"
                    alt="CRC"
                  />
                </div>
                <hr />

                <br />
                <h2 className="quali-h2">Mountaineering Certificates</h2>
                <br />

                <div className="img-div">
                  <h3 className="quali-h3"> Basic Mountaineering Course</h3>
                  <img
                    src={BMC}
                    class="figure-img img-fluid rounded"
                    alt="BMC"
                  />
                </div>
                <hr />

                <div className="img-div">
                  <h3 className="quali-h3"> Advanced Mountaineering Course</h3>
                  <img
                    src={AMC}
                    class="figure-img img-fluid rounded"
                    alt="AMC"
                  />
                </div>
                <hr />

                <br />
                <h2 className="quali-h2">Other Qualifications</h2>
                <br />

                <div className="img-div">
                  <h3 className="quali-h3"> Basic Life Support</h3>
                  <img
                    src={BLS}
                    class="figure-img img-fluid rounded"
                    alt="BLS"
                  />
                </div>
                <hr />

                <div className="img-div">
                  <h3 className="quali-h3"> Cymour Cycle Mechanic</h3>
                  <img
                    src={cycleM}
                    class="figure-img img-fluid rounded"
                    alt="cycleM"
                  />
                </div>
                <hr />

                <div className="img-div">
                  <h3 className="quali-h3"> Cymour Cycle Technician</h3>
                  <img
                    src={cycleT}
                    class="figure-img img-fluid rounded"
                    alt="cycleT"
                  />
                </div>
                <hr />

                <div className="img-div">
                  <h3 className="quali-h3"> Snake Rescue and Awareness</h3>
                  <img
                    src={SnakeR}
                    class="figure-img img-fluid rounded"
                    alt="SnakeR"
                  />
                </div>
                <hr />

                <div className="img-div">
                  <h3 className="quali-h3"> Arena- Advanced Animation</h3>
                  <img
                    src={ArenaA}
                    class="figure-img img-fluid rounded"
                    alt="ArenaA"
                  />
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

export default Qualifications;
