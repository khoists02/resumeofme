import React, { FC } from "react";

export const AboutMe: FC = () => {
  return (
    <section id="about" className="bg-white t-center active" style={{ display: "block" }}>
      <div className="about">
        <div className="content">
          <div className="block-content mb-100">
            <div className="row">
              <div className="col-md-12  ">
                <div className="main-title profile">
                  <h1 className="mb-20">Khoi LE</h1>
                  <h3>Senior Web Developer</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="block-content mb-100">
            <div className="row">
              <div className="col-md-12  ">
                <div className="sub-title mb-40">
                  <h2 className="uppercase">About Me</h2>
                </div>
              </div>
            </div>

            <p className="lead-intro">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse ! “
            </p>

            <img className="signature mt-20" src="img/signature.png" alt="" />
          </div>

          <div className="block-content mb-100 pb-30">
            <div className="row">
              <div className="col-md-12  ">
                <div className="sub-title mb-40">
                  <h2 className="uppercase">Personal Info</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                <div className="listing mt-40">
                  <div className="listing-inner">
                    <div className="listing-event">
                      <ul className="data left">
                        <li className="emph-1">Name</li>
                        <li className="emph-1">Birthday</li>
                        <li className="emph-1">Place of Birth</li>
                        <li className="emph-1">Nationality</li>
                        <li className="emph-1">Marital Status</li>
                        <li className="emph-1">Freelance</li>
                        <li className="emph-1">Vacation</li>
                      </ul>

                      <ul className="data right">
                        <li>Carlos Smith</li>
                        <li>
                          1982.04.09 <span className="emph-1">(year/day/month)</span>
                        </li>
                        <li>Sydney</li>
                        <li>Australian</li>
                        <li>Single</li>
                        <li>Available</li>
                        <li>Till April 25, 2016</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block-content mb-100  pb-30">
            <div className="row">
              <div className="col-md-12  ">
                <div className="sub-title mb-40">
                  <h2 className="uppercase">Contact Info</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                <div className="listing mt-40">
                  <div className="listing-inner">
                    <div className="listing-event">
                      <ul className="data left">
                        <li>
                          <span className="emph-1">Adress</span> :<br />
                          Carlose Smith 1234 Street Road, Chicago, IN 567 890 United States
                        </li>
                      </ul>

                      <ul className="data right">
                        <li>
                          <span className="emph-1">E-Mail</span> : carlossmith@gmail.com
                        </li>
                        <li>
                          <span className="emph-1">Website</span> : www.carlosesmith.com
                        </li>
                        <li>
                          <span className="emph-1">Phone</span> : + 123 456 789 456{" "}
                        </li>
                        <li>
                          <span className="emph-1">Skype</span> : Carlose_Smith
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block-content">
            <div className="row">
              <div className="col-md-12">
                <span className="page-number emph-1">- 1/5 -</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
