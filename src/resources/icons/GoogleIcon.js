import * as React from "react";

function SvgGoogleicon(props) {
  return (
    <svg width={25} height={25} {...props}>
      <defs>
        <path
          d="M.063.05v4.82H6.77a5.732 5.732 0 01-2.487 3.762v3.126H8.31c2.356-2.169 3.716-5.363 3.716-9.158 0-.884-.08-1.733-.227-2.55H.063z"
          id="google_icon_svg__a"
        />
        <path
          d="M.058.064v3.229a12.456 12.456 0 0011.135 6.864c3.365 0 6.186-1.116 8.247-3.019l-4.027-3.126c-1.116.748-2.543 1.19-4.22 1.19-3.245 0-5.992-2.193-6.972-5.138H.058z"
          id="google_icon_svg__c"
        />
        <path
          d="M1.388.01A12.455 12.455 0 00.063 5.607c0 2.011.481 3.914 1.325 5.597l4.163-3.229a7.489 7.489 0 01-.39-2.368c0-.82.14-1.62.39-2.367V.011H1.388z"
          id="google_icon_svg__e"
        />
        <path
          d="M.058 6.87L4.221 10.1c.98-2.945 3.727-5.137 6.972-5.137 1.83 0 3.472.628 4.764 1.863l3.574-3.574C17.373 1.241 14.552.006 11.193.006A12.456 12.456 0 00.058 6.87z"
          id="google_icon_svg__g"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(12.46 10.207)">
          <mask id="google_icon_svg__b" fill="#fff">
            <use xlinkHref="#google_icon_svg__a" />
          </mask>
          <path
            fill="#3E82F1"
            mask="url(#google_icon_svg__b)"
            d="M-6.86 18.681h25.808V-6.872H-6.859z"
          />
        </g>
        <g transform="translate(1.33 14.827)">
          <mask id="google_icon_svg__d" fill="#fff">
            <use xlinkHref="#google_icon_svg__c" />
          </mask>
          <path
            fill="#32A753"
            mask="url(#google_icon_svg__d)"
            d="M-6.865 17.08h33.228V-6.859H-6.865z"
          />
        </g>
        <g transform="translate(0 6.917)">
          <mask id="google_icon_svg__f" fill="#fff">
            <use xlinkHref="#google_icon_svg__e" />
          </mask>
          <path
            fill="#F9BB00"
            mask="url(#google_icon_svg__f)"
            d="M-6.86 18.125h19.334V-6.912H-6.86z"
          />
        </g>
        <g transform="translate(1.33 .057)">
          <mask id="google_icon_svg__h" fill="#fff">
            <use xlinkHref="#google_icon_svg__g" />
          </mask>
          <path
            fill="#E74133"
            mask="url(#google_icon_svg__h)"
            d="M-6.865 17.022h33.319V-6.917H-6.865z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgGoogleicon;
