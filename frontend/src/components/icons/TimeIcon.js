import React from "react";

const TimeIcon = props => (
  <svg viewBox="0 0 48 48" {...props} style={{stroke: 'currentcolor'}}>
    <g
      strokeWidth={4}
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeLinejoin="round"
    >
      <circle cx={24} cy={24} r={22} />
      <path data-color="color-2" d="M24 12v12h12" />
    </g>
  </svg>
);

export default TimeIcon;

