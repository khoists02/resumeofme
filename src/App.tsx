import React from "react";
import "./style.scss";
import MainLogo from "./assets/img/mainlogo.jpeg";
import { ResumeSection } from "./container/Resume";

function App() {
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
                    <li className="">
                      <a href="#about" className="">
                        <i className="icon-user"></i>About me
                        <span>ho am i</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#resume" className="active">
                        <i className="icon-briefcase"></i>Resume
                        <span>curriculum vita</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#portfolio" className="">
                        <i className="icon-camera"></i>Portfolio
                        <span>my works</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#blog" className="">
                        <i className="icon-chat"></i>Blog<span>My toughts</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="#contact" className="">
                        <i className="icon-phone"></i>Contact
                        <span>Say hello</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          <div className="col-md-9 right-content pd-r0 pd-l0">
            <ResumeSection />
            {/* <AboutMe /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
