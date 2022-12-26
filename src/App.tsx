import React, { useState } from "react";
import "./style.scss";
import MainLogo from "./assets/img/mainlogo.jpeg";
import { ResumeSection } from "./container/Resume";
import { AboutMe } from "./container/AboutMe";
import { Footer } from "./container/Footer";

const sections = [
  {
    label: "About me",
    value: "aboutme",
    sub: "Who Am I",
    icon: "bi bi-person"
  },
  {
    label: "Resume",
    value: "resume",
    sub: "",
    icon: "bi bi-briefcase"
  },
  {
    label: "Portfolio",
    value: "portfolio",
    sub: "My Works",
    icon: "bi bi-camera"
  }
];

function App() {
  const [selected, setSelected] = useState("aboutme");
  return (
    <div className="mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-md-2 left-content pd-r0">
            <header id="header">
              <div className="main-header">
                <div className="img-profile">
                  <img src={MainLogo} alt="MAIN LOGO" />

                  <div className="name-profile t-center">
                    <h5 className="uppercase">Khoi LE</h5>
                  </div>
                </div>

                <nav id="main-nav" className="main-nav clearfix t-center uppercase tabbed">
                  <ul className="clearfix">
                    {sections.map((dt, index) => {
                      return (
                        <li key={index} className="" onClick={() => setSelected(dt.value)}>
                          <a className={`${selected === dt.value ? "active" : ""}`}>
                            <i className={`${dt.icon}`}></i>
                            {dt.label}
                            <span>{dt.sub}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          <div className="col-md-9 right-content pd-r0 pd-l0">
            {selected === "resume" && <ResumeSection />}
            {selected === "aboutme" && <AboutMe />}
            {/* <AboutMe /> */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
