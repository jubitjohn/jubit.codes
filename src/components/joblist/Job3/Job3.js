import React from "react";
import "../joblist.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Job3() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-AOS="fade-up" className="job1">
      <div className="jobdetails">
        <div className="job1title">
          Web/App Developer Intern{" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(' <span style="color: #64ffda;">@Edith</span>')

                .pauseFor(500)
                .start();
            }}
          />{" "}
        </div>
        <div data-AOS="fade-up" className="jobduration">
          MAR 2020-MAY 2020
        </div>
        <div className="jobdescription">
          <ul className="job-li-text">
            <li data-AOS="fade-up" data-aos-delay="200">
              <i class="fas fa-caret-right"></i>
              Using ionic framework, I developed a Basic calculator application.
            </li>

            <li data-AOS="fade-up" data-aos-delay="400">
              {" "}
              <i class="fas fa-caret-right"></i> Developed a static mobile
              application with Flutter.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Job3;
