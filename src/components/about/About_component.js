import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./About_component.scss";

function AboutComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BaseComponent>
        <div className="aboutContainer">
          <div className="titleContainer">
            <h3>Our Story</h3>
            <img src="about.png" alt="about" />
          </div>
          <div className="ContentAbout">
            <h2>Our Business Model</h2>
            <p>
              Madrasdigitalmedia, founded in 2017, is a full-service branding,
              digital marketing & ad film agency based in Chennai, India, with a
              team of fewer than 20employees. We’re a team of experts who are
              creative, ROI focused, performance-driven; media, creative &
              advertising agency who help organizations passionate about
              achieving inspiring results.<br/><br/> With over 10+ years of industry
              specific expertise, we at Madrasdigitalmedia have worked with more
              than 1000 clients span across globe. Our broad range of branding,
              marketing, creative & video production services does not limit our
              creativity in the pursuit of original, unconventional, and
              innovative design and development, we offer tailor-made solutions
              based on the needs of our clients.
            </p>
          </div>
          <div className="gifContainer">
            <img src="about1.gif" alt="gif" />
            <img src="about2.gif" alt="gif" />
            <img src="about3.gif" alt="gif" />
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default AboutComponent;
