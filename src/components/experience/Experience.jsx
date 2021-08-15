import React from "react";
import { useEffect } from "react";
import "./experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import Job1 from "../joblist/job1/Job1";
import Job2 from "../joblist/Job2/Job2";
import Job3 from "../joblist/Job3/Job3";
function Experience() {
  const [option, setstate] = useState("a");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-AOS="fade-up" className="experience">
      <div className="exptitle">
        <h3 className="exptitle-text">/ experience</h3>
      </div>
      <div data-AOS="fade-up" className="experienceinfo">
        <div className="companybox">
          <div data-AOS="fade-up" className="expcompany">
            <div
              data-AOS="fade-up"
              onClick={() => setstate("a")}
              className="b1 s1"
            >
              {console.log(option)}
              MICROSOFT
            </div>
            <div
              data-AOS="fade-up"
              onClick={() => setstate("b")}
              className="b1 s2"
            >
              ADAID
            </div>
            <div
              data-AOS="fade-up"
              onClick={() => setstate("c")}
              className="b1 s3"
            >
              EDITH
            </div>
            {/* <div onClick={() => setstate("d")} className="b4">
            Adaid4
          </div> */}
          </div>
          <span className="jss3 jss5 MuiTabs-indicator jss6"></span>
        </div>
        {option === "a" ? <Job1 /> : null}
        {option === "b" ? <Job2 /> : null}
        {option === "c" ? <Job3 /> : null}
        {/* {option === "d" ? <div>hello4</div> : null} */}
      </div>
    </div>
  );
}

export default Experience;
