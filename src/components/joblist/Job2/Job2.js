import React from "react";
import "../joblist.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Job2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-AOS="fade-up" className="job1">
      <div className="jobdetails">
        <div className="job1title">
          Co-Founder – Project Lead{" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(' <span style="color: #64ffda;">@Adaid</span>')

                .pauseFor(500)
                .start();
            }}
          />
        </div>
        <div data-AOS="fade-up" className="jobduration">
          NOV 2020 – PRESENT
        </div>
        <div className="jobdescription">
          <ul className="job-li-text">
            <li data-AOS="fade-up" data-aos-delay="200">
              <i class="fas fa-caret-right"></i>
              Designed and developed commercial WordPress websites for a variety
              of businesses.
            </li>
            <li data-AOS="fade-up" data-aos-delay="400">
              <i class="fas fa-caret-right"></i>
              We oversaw a wide range of digital marketing campaigns for our
              clients.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Job2;
