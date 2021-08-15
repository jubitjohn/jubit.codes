import React from "react";
import "../joblist.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Job1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-AOS="fade-up" className="job1">
      <div className="jobdetails">
        <div data-AOS="fade-up" className="job1title">
          Beta Microsoft Student Ambassador
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(' <span style="color: #64ffda;">@Microsoft</span>')

                .pauseFor(500)
                .start();
            }}
          />
        </div>
        <div data-AOS="fade-up" className="jobduration">
          MAR 2020 - PRESENT
        </div>
        <div className="jobdescription">
          <ul className="job-li-text1">
            <li data-AOS="fade-up" data-aos-delay="200" className="job-li-text">
              <i class="fas fa-caret-right"></i> Delivered Webinars on the
              fundamentals of Azure cloud computing.
            </li>
            <li data-AOS="fade-up" data-aos-delay="400" className="job-li-text">
              <i class="fas fa-caret-right"></i> Founder and Tech lead at MLSA
              club, CUSAT.
            </li>
            <li data-AOS="fade-up" data-aos-delay="600" className="job-li-text">
              <i class="fas fa-caret-right"></i> Delivered Webinars on the
              Microsoft Student Ambassador Program.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Job1;
