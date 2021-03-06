import * as React from "react";

function SvgMale6(props) {
  return (
    <svg width={140} height={140} {...props}>
      <defs>
        <linearGradient
          x1="3.216%"
          y1="100%"
          x2="96.784%"
          y2="0%"
          id="male-6_svg__c"
        >
          <stop stopColor="#7117EA" offset="0%" />
          <stop stopColor="#EA6060" offset="100%" />
        </linearGradient>
        <filter
          x="-34%"
          y="-26%"
          width="168%"
          height="168%"
          filterUnits="objectBoundingBox"
          id="male-6_svg__a"
        >
          <feOffset dy={8} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={10}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.137254902 0 0 0 0 0.0431372549 0 0 0 0 0.28627451 0 0 0 0.1 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M89.52 89.52c-13.972 13.973-65.068 13.973-79.04 0-13.973-13.972-13.973-65.068 0-79.04 13.972-13.973 65.068-13.973 79.04 0 13.973 13.972 13.973 65.068 0 79.04"
          id="male-6_svg__b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(20 12)">
          <use
            fill="#000"
            filter="url(#male-6_svg__a)"
            xlinkHref="#male-6_svg__b"
          />
          <use fill="#FFF" xlinkHref="#male-6_svg__b" />
        </g>
        <path
          d="M78.663 58.282l.166.006c.387.03.773.17 1.114.43l.129.106c.659.589.899 1.533.577 2.368l-.156.396C75.703 73.551 64.035 82 50.392 82l-.45-.003c-13.59-.185-25.156-8.756-29.8-20.784l-.062-.186a2.119 2.119 0 01-.08-.568v-.021l.008-.178c.052-.59.348-1.148.84-1.523l.128-.091c1.131-.741 2.666-.243 3.165 1.048l.149.375c4.177 10.344 14.287 17.643 26.102 17.643l.426-.003c11.78-.176 21.802-7.607 25.83-18.033a2.16 2.16 0 012.015-1.394zM50.589 19.154a23.212 23.212 0 0113.803 4.579l.321.243c5.536 4.257 9.104 10.94 9.104 18.46v1.172c-.008.228-.24 6.426-3.725 9.122l-.058.332c-1.675 9.27-8.163 17.72-19.369 17.746h-.049l-.395-.005c-11.148-.224-17.532-8.864-19.054-18.203l.016.11.017.111-.2-.153c-3.472-2.783-3.64-9.067-3.64-9.067v-1.166l.004-.433c.137-7.485 3.81-14.106 9.421-18.27l.377-.273a23.21 23.21 0 0113.427-4.305zM37.594 35.681l-.138.548c-.903 3.5-2.32 7.459-4.52 10.686l.04.676v.612c0 9.736 5.982 20.42 17.664 20.436l.375-.004c11.436-.24 17.29-10.8 17.29-20.432v-.612l-.149-5.467-.01-.035-.009-.034-.64.02c-15.089.414-25.624-4.129-29.903-6.394zM56.41 62.172l.092.007c.444.065.61.594.225.847l-.281.18c-4.858 3.014-9.205 1.095-11.212-.174l-.073-.054c-.324-.286-.11-.806.378-.806h10.871zM41.653 47.26l.16.006a2.343 2.343 0 012.184 2.337l-.005.161a2.343 2.343 0 01-2.339 2.183l-.16-.005a2.343 2.343 0 01.16-4.682zm17.868 0l.15.006c1.132.082 2.026 1.097 2.026 2.337l-.005.161c-.076 1.22-1.019 2.183-2.17 2.183l-.15-.005c-1.132-.083-2.026-1.098-2.026-2.339 0-1.294.974-2.343 2.175-2.343zM39.163 30.896a.863.863 0 00-1.051.245l-.063.092a.86.86 0 00.315 1.19c2.86 1.606 12.585 6.486 25.568 6.755l-.562-.047c-12.492-1.12-21.662-6.582-24.111-8.181z"
          fill="url(#male-6_svg__c)"
          transform="translate(20 12)"
        />
        <path
          d="M92.518 47.388h-4.375c-.973 0-1.76.772-1.76 1.723 0 .951.787 1.723 1.76 1.723h5.292a22.9 22.9 0 00-.917-3.446M89.508 54.279c0 .951.788 1.722 1.76 1.722h2.543V54.98c0-.82-.052-1.626-.136-2.423H91.27c-.973 0-1.761.771-1.761 1.723"
          fill="#000"
          opacity={0.098}
        />
      </g>
    </svg>
  );
}

export default SvgMale6;
