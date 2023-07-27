import React from "react";

export default function CrossIcon({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.46967 9.46967C9.76256 9.17678 10.2374 9.17678 10.5303 9.46967L12 10.9393L13.4697 9.46967C13.7626 9.17678 14.2374 9.17678 14.5303 9.46967C14.8232 9.76256 14.8232 10.2374 14.5303 10.5303L13.0607 12L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2374 14.8232 13.7626 14.8232 13.4697 14.5303L12 13.0607L10.5303 14.5303C10.2374 14.8232 9.76256 14.8232 9.46967 14.5303C9.17678 14.2374 9.17678 13.7626 9.46967 13.4697L10.9393 12L9.46967 10.5303C9.17678 10.2374 9.17678 9.76256 9.46967 9.46967Z"
      />
    </svg>
  );
}
