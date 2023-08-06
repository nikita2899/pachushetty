import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  return (
    <section className="main">
      <header>
        <img
          className="header_logo"
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <p
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </p>
        <div className="subnav">
          <p id="career" style={{marginBottom: '15px'}}>Career</p>
          <div className="subnav-content">
            <p
              id="cid"
              onClick={() => {
                navigate("/treks");
              }}
            >
              Treks
            </p>
            <p
              id="cid"
              onClick={() => {
                navigate("/expeditions");
              }}
            >
              Expeditions
            </p>
            <p
              id="cid2"
              onClick={() => {
                navigate("/Qualifications");
              }}
            >
              Qualification
            </p>
            <p
              id="cid"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Upcoming projects
            </p>
          </div>
        </div>

        <p
          onClick={() => {
            navigate("/A&A");
          }}
        >
          Achievements & Awards
        </p>
        <p
          onClick={() => {
            navigate("/Media");
          }}
        >
          Media
        </p>
      </header>
    </section>
  );
}

export default Header;
