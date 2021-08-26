import React from "react";
import "./NavBar.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function NavBar() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div data-AOS="fade-up" data-aos-delay="100" className="nav">
        <div className="homenav">
          <a href="#intro">
            <div
              data-AOS="fade-up"
              data-aos-delay="300"
              className="homenavtext"
            >
              /home
            </div>
          </a>
        </div>
        <div className="aboutnav">
          <a href="#about">
            <div
              data-AOS="fade-up"
              data-aos-delay="600"
              className="aboutnavtext"
            >
              /about
            </div>
          </a>
        </div>
        <div className="experiencenav">
          <a href="#experience">
            <div
              data-AOS="fade-up"
              data-aos-delay="900"
              className="experiencenavtext"
            >
              /experinece
            </div>
          </a>
        </div>
        <div className="software-creationsnav">
          <a href="#creations">
            <div
              data-AOS="fade-up"
              data-aos-delay="1100"
              className="softwarenavtext"
            >
              /software-creations
            </div>
          </a>
        </div>
        <div className="socialicons">
          <a href="https://www.linkedin.com/in/jubitjohn/">
            <div className="navlinkedin">
              <i class="fab fa-linkedin"></i>
            </div>
          </a>
          <a href="https://github.com/jubitjohn">
            <div className="github">
              <i class="fab fa-github"></i>
            </div>
          </a>
          <a href="mailto:jubitjohn1@gmail.com">
            <div className="mail">
              <i class="fas fa-envelope"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
