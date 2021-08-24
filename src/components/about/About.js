import React from "react";
import { useEffect } from "react";
import "./about.css";
import logo from "./jubitjohn.jpg";
import "../animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-AOS="fade-up" className="about">
      <div className="aboutdiv1">
        <div className="aboutme">
          <h2 className="aboutme-text">/ about me</h2>
        </div>
        <div data-AOS="fade-up" className="abtdescription ">
          <h6 className="abtdescription-text ">
            I am currently studying Information Technology at Cochin University
            Of Science and Technology , with a focus in Machine Learning and
            Artificial Intelligence.<br></br> I'm interested in machine
            learning, human-computer interactions and frontend development. I
            like exploring new grounds. I'm also hold my fair share in
            entrepreneurship. In my free time, I eat guava fruit and play games
            or watch Netflix.
          </h6>
        </div>
        <div data-AOS="fade-up" className="skills">
          <p className="skilltext">
            Here are some technologies I have been working with:
          </p>
        </div>
        <div className="abtlist">
          <div className="list1">
            <ul>
              <li
                data-AOS="fade-up"
                data-aos-duration="2500"
                data-aos-delay="50"
                className="listtext"
              >
                <i class="fas fa-caret-right"></i>Javascript ES6+
              </li>
              <li
                data-AOS="fade-up"
                data-aos-duration="2500"
                data-aos-delay="50"
                className="listtext"
              >
                <i class="fas fa-caret-right"></i>React.js
              </li>
              <li
                data-AOS="fade-up"
                data-aos-duration="2500"
                data-aos-delay="200"
                className="listtext"
              >
                <i class="fas fa-caret-right"></i>Python
              </li>
            </ul>
          </div>
          <div className="list2">
            <ul>
              <li
                data-AOS="fade-up"
                data-aos-duration="2500"
                data-aos-delay="50"
                className="listtext"
              >
                <i class="fas fa-caret-right"></i>ML/AI
              </li>
              <li
                data-AOS="fade-up"
                data-aos-duration="2500"
                data-aos-delay="50"
                className="listtext"
              >
                <i class="fas fa-caret-right"></i>HTML/CSS
              </li>
              <li
                data-AOS="fade-up"
                data-aos-duration="2500"
                data-aos-delay="50"
                className="listtext"
              >
                <i class="fas fa-caret-right"></i>C/C++
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-AOS="fade-up" data-aos-delay="500" className="pic">
        <img className="abtpic" src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default About;
