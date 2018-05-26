import React from "react";

const TrashIcon = props => (
  <svg viewBox="0 0 48 48" {...props} style={{stroke: 'currentcolor'}}>
    <g
      strokeWidth={4}
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeLinejoin="round"
    >
      <path data-color="color-2" d="M24 25v13M16 25v13M32 25v13M16 10V2h16v8" />
      <path d="M40 16v30H8V16M2 10h44v6H2z" />
    </g>
  </svg>
);

export default TrashIcon

