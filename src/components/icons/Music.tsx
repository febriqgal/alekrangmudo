import React from "react";

export default function MusicIcon({
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
        d="M2 6C2 3.79086 3.79086 2 6 2H14C16.2091 2 18 3.79086 18 6V14C18 16.2091 16.2091 18 14 18H6C3.79086 18 2 16.2091 2 14V6Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 18C6 20.2091 7.79086 22 10 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6V14C18 16.2091 16.2091 18 14 18H6Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.25 6C9.25 5.58579 9.58579 5.25 10 5.25C12.6234 5.25 14.75 7.37665 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10C13.25 8.46321 12.1834 7.17555 10.75 6.83697V12C10.75 13.5188 9.51878 14.75 8 14.75C6.48122 14.75 5.25 13.5188 5.25 12C5.25 10.4812 6.48122 9.25 8 9.25C8.45011 9.25 8.87497 9.35814 9.25 9.54985V6Z"
      />
    </svg>
  );
}
