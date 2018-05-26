import React from "react";

const DownArrowIcon = props => (
  <svg viewBox="0 0 64 64" {...props} width="24px" height="24px" style={{stroke: 'currentcolor'}}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeLinejoin="round"
      d="M60 18L32 46 4 18"
      strokeWidth={8}
    />
  </svg>
);

export default DownArrowIcon

