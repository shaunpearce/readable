import React from "react";

const UpArrowIcon = props => (
  <svg viewBox="0 0 48 48" {...props} width="24px" height="24px" style={{stroke: 'currentcolor'}}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeLinejoin="round"
      d="M44 34L24 14 4 34"
      strokeWidth={6}
    />
  </svg>
);

export default UpArrowIcon

