import React, { FC } from "react";
import { TimeLine } from "../components/Timeline";

export const AboutMe: FC = () => {
  const leftPersonalInfo = () => {
    return (
      <>
        <div className="emph-1 fs-6">Name</div>
        <div className="emph-1 fs-6">Birthday</div>
        <div className="emph-1 fs-6">Place of Birth</div>
        <div className="emph-1 fs-6">Nationality</div>
        <div className="emph-1 fs-6">Marital Status</div>
      </>
    );
  };

  const rightPersonalInfo = () => {
    return (
      <>
        <div className="text-secondary">Le Minh Khoi</div>
        <div className="text-secondary">07 Dec 1993</div>
        <div className="text-secondary">Quang Ngai</div>
        <div className="text-secondary">Vietnam</div>
        <div className="text-secondary">Married</div>
      </>
    );
  };

  const leftContactInfo = () => {
    return (
      <>
        <span className="emph-1 fs-6">Address</span> :<br />
        <span className="fs-6"> 318/5 Trinh Dinh Trong, Hoa Thanh, Tan Phu, HCM</span>
      </>
    );
  };

  const rightContactInfo = () => {
    return (
      <>
        <li>
          <span className="emph-1 fs-6">E-Mail</span> : khoi.kioto@gmail.com
        </li>
        <li>
          <span className="emph-1 fs-6">Website</span> :{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://khoilefrontend.000webhostapp.com/">
            www.khoilefe.com
          </a>
        </li>
        <li>
          <span className="emph-1 fs-6">Phone</span> : +84 333619316
        </li>
        <li>
          <span className="emph-1 fs-6">Skype</span> : khoiaesgit@gmail.com
        </li>
      </>
    );
  };
  return (
    <section id="about" className="bg-white t-center">
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
              “ I have 5 years+ of experience working with javascript, typescript and writing webs
              app. I have extensive knowledge of js, html, css and browser APIs as well as
              significant experience with popular frameworks and libraries like React, Redux,
              Angular. My Biggest passion is to build the most beautiful and helpful craziest webs
              for my client, my team and for myself. “
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
              <div className="col-md-12  ">
                <div className="timeline">
                  <TimeLine leftChildren={leftPersonalInfo()} rightChildren={rightPersonalInfo()} />
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
              <div className="col-md-12  ">
                <div className="timeline">
                  <TimeLine leftChildren={leftContactInfo()} rightChildren={rightContactInfo()} />
                </div>
              </div>
            </div>
          </div>

          <div className="block-content">
            <div className="row">
              <div className="col-md-12">
                <span className="page-number emph-1">- 1/3 -</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
