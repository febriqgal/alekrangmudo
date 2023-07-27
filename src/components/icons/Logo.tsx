import React from "react";

export default function Logo({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 138 138"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10_2)">
        <path d="M88.3511 0H49.6489L0 138H34.9881L68.8039 37.1536L85.8106 87.6754H85.7447L102.62 138H138L88.3511 0Z" />
        <path
          opacity="0.5"
          d="M102.62 138L94.4098 113.623H43.198L34.9881 138L68.8039 37.1536L51.9948 87.6754H85.7447L102.62 138Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_2">
          <rect width="138" height="138" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
