import * as React from "react";

function SvgDone(props) {
  return (
    <svg width={18} height={18} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#00C67B" cx={9} cy={9} r={9} />
        <path
          d="M12.836 5a1.166 1.166 0 01.824 1.988l-5.397 5.397a1.18 1.18 0 01-1.67 0l-2.252-2.253a1.166 1.166 0 011.647-1.647l1.44 1.44 4.584-4.584c.227-.227.526-.341.824-.341z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgDone;
