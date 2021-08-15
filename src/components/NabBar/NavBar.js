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
          <div data-AOS="fade-up" data-aos-delay="300" className="homenavtext">
            /home
          </div>
        </div>
        <div className="aboutnav">
          <div data-AOS="fade-up" data-aos-delay="600" className="aboutnavtext">
            /about
          </div>
        </div>
        <div className="experiencenav">
          <div
            data-AOS="fade-up"
            data-aos-delay="900"
            className="experiencenavtext"
          >
            /experinece
          </div>
        </div>
        <div className="software-creationsnav">
          <div
            data-AOS="fade-up"
            data-aos-delay="1100"
            className="softwarenavtext"
          >
            /software-creations
          </div>
        </div>
        <div className="socialicons">
          <div className="navlinkedin">
            <i class="fab fa-linkedin"></i>
          </div>
          <div className="github">
            <i class="fab fa-github"></i>
          </div>
          <div className="mail">
            <i class="fas fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
