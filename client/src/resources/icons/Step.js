import * as React from "react";

function SvgStep(props) {
  return (
    <svg width={18} height={18} {...props}>
      <circle
        cx={9}
        cy={117}
        r={8.5}
        transform="translate(0 -108)"
        stroke="#FFF"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgStep;
