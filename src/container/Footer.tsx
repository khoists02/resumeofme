import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="col-md-1 pd-l0 footer">
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/minhkhoi.le.982/" rel="noreferrer" target="_blank">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/khoi-le-480941188/" rel="noreferrer" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>

      <div className="copyright">
        <p>© 2022 </p>
      </div>
    </div>
  );
};
