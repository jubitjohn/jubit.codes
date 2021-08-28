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
          <div className="creationlinks">
            <div className="fileicon">
              <i class="far fa-folder"></i>
            </div>
            <div className="githublink">
              <a href="https://github.com/jubitjohn/Courier_management">
                <i class="fab fa-github"></i>
              </a>
            </div>
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
          <div className="creationlinks">
            <div className="fileicon">
              <i class="far fa-folder"></i>
            </div>
            <div className="githublink">
              <a href="https://github.com/jubitjohn">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="creationtitle">
            Fake news Detection with Machine Learning
          </div>
          <div className="creationdes">
             Long Short Term Memory (LSTM) network to detect fake news from a
            given news corpus. This project could be used to automatically
            predict whether the circulating news is fake or not.
            <div className="tech">Python</div>
          </div>
        </div>
        <div
          data-AOS="fade-up"
          data-aos-delay="600"
          className="creationcards cards"
        >
          <div className="creationlinks">
            <div className="fileicon">
              <i class="far fa-folder"></i>
            </div>
            <div className="githublink">
              <a href="https://github.com/jubitjohn/PR2PO">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="creationtitle">PR2PO Application</div>
          <div className="creationdes">
             PR2PO is a command-driven procurement application that helps the
            user to create purchase requisitions, view requisition details,
            convert purchase requisition into purchase order.
            <div className="tech">C++</div>
          </div>
        </div>
      </div>
      <div className="creations">
        <br></br>
      </div>
      <div className="designcredits">
        <div className="designcredittxt">
          Designed & Developed by <span className="jubitjohn">Jubit John</span>
          <br></br>All rights reserved. ©
        </div>
      </div>
    </div>
  );
}

export default Creations;
