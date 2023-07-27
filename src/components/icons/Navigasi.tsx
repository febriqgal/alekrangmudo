import React from "react";

export default function NavigasiIcon({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path d="M5.50043 6.87012C4.39519 7.43296 3.373 8.15011 2.72215 8.64223C2.25538 8.99517 2 9.55189 2 10.1371V19.8065C2 20.6599 3.0279 21.1548 3.73627 20.6788C4.94575 19.866 6.58869 18.9431 8 18.7851C9.65915 18.5994 10.8296 19.4898 12 20.3802C13.1704 21.2706 14.3408 22.161 16 21.9752C17.8673 21.7662 20.14 20.2181 21.2778 19.3578C21.7446 19.0049 22 18.4481 22 17.863V8.19354C22 7.34009 20.9721 6.84519 20.2637 7.32121C19.6824 7.71188 19.0009 8.12799 18.2931 8.47238C17.999 9.74943 17.4155 11.0833 16.7019 12.2012C16.1721 13.0311 15.5214 13.8215 14.7719 14.4199C14.0313 15.0113 13.0843 15.5 12 15.5C10.9157 15.5 9.96867 15.0113 9.22807 14.4199C8.47858 13.8215 7.82792 13.0311 7.29815 12.2012C6.27601 10.6 5.52094 8.5559 5.50043 6.87012Z" />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 14C14.5 14 17 9.45097 17 6.8C17 4.14903 14.7614 2 12 2C9.23858 2 7 4.14903 7 6.8C7 9.45097 9.5 14 12 14ZM12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z"
      />
    </svg>
  );
}
