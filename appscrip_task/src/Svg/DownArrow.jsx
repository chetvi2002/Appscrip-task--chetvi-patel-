import React from "react";

const DownArrow = (props) => (
  <svg
    width={props.width || "16"}
    height={props.height || "16"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 10l5 5 5-5H7z" fill={props.fill || "currentColor"} />
  </svg>
);

export default DownArrow;
