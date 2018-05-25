import React from "react";

const Logo = props => (
  <svg viewBox="-2 0 16 16" {...props} style={{stroke: 'currentcolor'}}>
    <g
      fill="none"
      //stroke="#bab8bc"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M.5 3.5h15" />
      <path data-color="color-2" d="M.5 8.5h15" />
      <path d="M7.5 13.5h8" />
    </g>
  </svg>
);

export default Logo

