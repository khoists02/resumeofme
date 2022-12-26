import React, { FC } from "react";
import { TimeLine } from "../components/Timeline";
import { Experience, experienceData } from "../data/experience";

export const ResumeSection: FC = () => {
  const leftContent = (data: Experience) => {
    return (
      <>
        <span className="date">
          <i className="bi bi-calendar-day fs-5 me-2"></i>
          <span>{data.date}</span>
        </span>
        <h4>{data.title}</h4>
      </>
    );
  };

  const rightContent = (data: Experience) => {
    return (
      <>
        <div className="tasks">
          <div className="fs-5">
            <i className="bi bi-card-checklist fs-5 me-2"></i>
            <span>Tasks</span>
          </div>
          <div className="ul me-2">
            {data.tasks.map((task, index) => {
              return (
                <li key={index} className="text-dark">
                  {task}
                </li>
              );
            })}
          </div>
        </div>
        <p>{data.description}</p>
      </>
    );
  };
  return (
    <section
      className="bg-white t-center active"
      style={{
        display: "block",
        position: "static",
        visibility: "visible"
      }}>
      <div className="resume">
        <div className="content">
          <div className="block-content mb-100">
            <div className="row">
              <div className="col-md-12  ">
                <div className="main-title">
                  <h1 className="mb-20">Resume</h1>
                  <h5 className="uppercase">Curriculum Vita</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="block-content mb-100  pb-10">
            <div className="row">
              <div className="col-md-12  ">
                <div className="sub-title mb-40">
                  <h2 className="uppercase">Experience</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12  ">
                <div className="timeline">
                  {experienceData.map((dt, index) => {
                    return (
                      <TimeLine
                        leftChildren={leftContent(dt)}
                        rightChildren={rightContent(dt)}
                        key={index}
                        extendClass={index % 2 === 0 ? "" : "switched"}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="block-content mb-100  pb-10">
            <div className="row">
              <div className="col-md-12  ">
                <div className="sub-title mb-40">
                  <h2 className="uppercase">Education</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12  ">
                <div className="timeline">
                  <div className="timeline-inner">
                    <div className="name">
                      <span className="date">2016</span>
                      <h4>Web Developer </h4>
                    </div>
                    <div className="detail">
                      <p>FPT Aptech</p>
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
                  <h2 className="uppercase">skills</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12  ">
                <div className="listing-large mt-40">
                  <div className="listing-large-inner">
                    <div className="listing-event">
                      <ul className="data left clearfix">
                        <li>
                          <h5>HTML</h5>
                          <div className="rating">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                          </div>
                        </li>

                        <li>
                          <h5>CSS</h5>
                          <div className="rating">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                          </div>
                        </li>

                        <li>
                          <h5>React</h5>
                          <div className="rating">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="transparent"></span>
                          </div>
                        </li>

                        <li>
                          <h5>Nodejs</h5>
                          <div className="rating">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                          </div>
                        </li>
                        <li>
                          <h5>Java</h5>
                          <div className="rating">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                            <span className="transparent"></span>
                          </div>
                        </li>
                      </ul>

                      <ul className="data right clearfix">
                        <li>
                          <h5>Assets</h5>
                          <p className="emph-3">
                            Responsible, Diligence, Labour, Rigor, Creative, Funny, Great
                            Communicator, Flexible
                          </p>
                        </li>

                        <li>
                          <h5>Languages</h5>
                          <ul>
                            <li className="emph-1">
                              English <span className="emph-4">(Advanced Speaking)</span>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <h5>Hobbies &amp; Interests</h5>
                          <ul className="hb-list">
                            <li>
                              <span>
                                <i className="bi bi-speaker"></i>
                              </span>
                              <h6>Music</h6>
                            </li>

                            <li>
                              <span>
                                <i className="bi bi-xbox"></i>
                              </span>
                              <h6>Gaming</h6>
                            </li>

                            <li>
                              <span>
                                <i className="icon-globe-6"></i>
                              </span>
                              <h6>Travel</h6>
                            </li>

                            <li>
                              <span>
                                <i className="icon-food-1"></i>
                              </span>
                              <h6>Cooking</h6>
                            </li>
                          </ul>
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
                <span className="page-number emph-1">- 2/5 -</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
