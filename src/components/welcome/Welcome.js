import React from "react";
import { useEffect } from "react";
import "./welcome.css";
import Typewriter from "typewriter-effect";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import ThreeJSAnimation from "../jubit-model";

function Welcome() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="intro" id="intro">
      <div id="jubit-model">
        <ThreeJSAnimation />
      </div>
      <div className="typing">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                'hi, <b><span style="color: #64ffda;">jubit</span></b> here.'
              )

              .pauseFor(500)
              .start();
          }}
        />
      </div>

      <div data-AOS="fade-up" className="description-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("I create stuff sometimes.")

              .pauseFor(100)
              .start();
          }}
        />
      </div>
      <div data-AOS="fade-up" className="description ">
        I'm a software engineer and a techie based in Kochi. I have profound
        interest in machine learning, human-computer interactions, frontend
        development, and everything in between.
      </div>
      <div data-AOS="fade-up" data-aos-delay="500" className="hello-button">
        <a href="mailto:jubitjohn1@gmail.com">
          <button className="button" href="mailto:someone@example.com">
            <i class="fas fa-envelope"></i>
            <span data-AOS="fade-up" className="buttontxt ">
              Say hello
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
$(".container").mousemove(function (event) {
  var eye = $(".eye");
  var x = eye.offset().left + eye.width() / 2;
  var y = eye.offset().top + eye.height() / 2;
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;

  eye.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)",
  });
});
