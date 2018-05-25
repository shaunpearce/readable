import React from "react";

const PostsIcon = props => (
  <svg viewBox="0 0 32 32" {...props} width="1em" height="1em" style={{stroke: 'currentcolor'}}>
    <g
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeLinejoin="round"
    >
      <path d="M7 18H1v10c0 1.7 1.3 3 3 3" />
      <path d="M7 1v27c0 1.7-1.3 3-3 3h24c1.7 0 3-1.3 3-3V1H7z" />
      <path
        data-color="color-2"
        d="M22 6h4M22 11h4M12 16h14M12 6h6v5h-6zM16 26h-4M16 21h-4M20 21h6v5h-6z"
      />
    </g>
  </svg>
);

export default PostsIcon;

