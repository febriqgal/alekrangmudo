import React from "react";

export default function VideoIcon({
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
        d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
      />
      <path d="M10 17.1315V12.8685C10 12.0698 10.8901 11.5934 11.5547 12.0365L14.7519 14.1679C15.3457 14.5638 15.3457 15.4362 14.7519 15.832L11.5547 17.9635C10.8901 18.4066 10 17.9302 10 17.1315Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.6626 2L5.66284 7.99951H7.33731L10.3371 2H16.6626L13.6628 7.99951H15.3373L18.3303 2.01345C20.3849 2.18141 22 3.90209 22 6V8H2V6C2 3.79086 3.79086 2 6 2H8.6626Z"
      />
    </svg>
  );
}
