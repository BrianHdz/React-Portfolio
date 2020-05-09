import React from "react";
import "./style.css";
import myResume from "../../images/BrianHernandezResume.pdf";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <span><a className="resume" href={myResume}>My Resume - Click</a><br></br>E-Mail - BrianHdz87@gmail.com<br></br>Cell - (714) 392-6841</span>
    </footer>
  );
}

export default Footer;
