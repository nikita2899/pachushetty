import React from "react";
import Header2 from "../Different Header/Header2";
import { Contact } from "../Contact Me/Contact";
import "./Payment.css";
import realqr from "./qr image.jpg";

function Payments() {
  return (
    <>
      <div>
        <Header2 />
      </div>
      <div className="content-container">
        <div className="payment_h4">
          <h4>
            For sponsoring my expeditions and further mountaineering or cycling
            related projects, kindly scan the given QR. Thank you for your
            support, I really appreciate it!
          </h4>
          <hr />
          <div className="container">
            <div class="row">
              <div class="col-sm">
                <img classname="payment_img" src={realqr} alt="QR" />
              </div>
              <div class="col-sm">
                <p>Prasad Vijay Shetty</p>
                <p>AXIS BANK</p>
                <p>Branch: Karkala</p>
                <p>A/C no: 918010039630738</p>
                <p>IFSC CODE: UTIB0003066</p>
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

export default Payments;
