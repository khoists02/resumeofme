import React, { FC } from "react";

interface ITimeLine {
  leftChildren: React.ReactElement | string;
  rightChildren: React.ReactElement | string;
  extendClass?: string;
}

export const TimeLine: FC<ITimeLine> = ({ leftChildren, rightChildren, extendClass = "" }) => {
  return (
    <div className="timeline-inner">
      <div className={`name ${extendClass}`}>{leftChildren}</div>

      <div className="detail">{rightChildren}</div>
    </div>
  );
};
