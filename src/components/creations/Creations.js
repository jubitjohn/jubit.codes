import React from "react";
import "./creations.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Creations() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-AOS="fade-up" className="creation-boxes" id="creations">
      <div className="creationheader">/ software creations</div>
      <div className="creations">
        <div
          data-AOS="fade-up"
          data-aos-delay="200"
          className="creationcards cards"
        >
          <div className="fileicon">
            <i class="far fa-folder"></i>
          </div>
          <div className="creationtitle">
            Courier Management Systems - DBMS mini Project
          </div>
          <div className="creationdes">
             Courier Management System is a web-based system that enables a
            courier management company to track and manage packages.
            <div className="tech">HTML/CSS, JS, SQL, PHP</div>
          </div>
        </div>
        <div
          data-AOS="fade-up"
          data-aos-delay="400"
          className="creationcards cards"
        >
          <div className="fileicon">
            <i class="far fa-folder"></i>
          </div>
          <div className="creationtitle">
            Fake news Detection with Machine Learning
          </div>
          <div className="creationdes">
             Long Short Term Memory (LSTM) network to detect fake news from a
            given news corpus. This project could be used to automatically
            predict whether the circulating news is fake or not.
            <div className="tech">HTML/CSS, JS, SQL, PHP</div>
          </div>
        </div>
        <div
          data-AOS="fade-up"
          data-aos-delay="600"
          className="creationcards cards"
        >
          <div className="fileicon">
            <i class="far fa-folder"></i>
          </div>
          <div className="creationtitle">DBMS mini Project</div>
          <div className="creationdes">
             Courier Management System is a web-based system that enables a
            courier management company to track and manage packages.
            <div className="tech">HTML/CSS, JS, SQL, PHP</div>
          </div>
        </div>
      </div>
      <div className="creations"></div>
    </div>
  );
}

export default Creations;
