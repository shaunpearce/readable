import React from "react";

const StarIcon = props => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em" style={{stroke: 'currentcolor'}}>
    <path
      fill="none"
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M12 2.49l3.09 6.26L22 9.754l-5 4.874 1.18 6.882L12 18.262 5.82 21.51 7 14.628 2 9.754 8.91 8.75z"
      strokeWidth={2}
    />
  </svg>
);

export default StarIcon;

