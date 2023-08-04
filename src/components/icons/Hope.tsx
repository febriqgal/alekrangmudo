import React from "react";

export default function HopeIcon({
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
        d="M17 2H7C5.34315 2 4 3.34315 4 5V19H20V5C20 3.34315 18.6569 2 17 2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 11C7.25 10.5858 7.58579 10.25 8 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H8C7.58579 11.75 7.25 11.4142 7.25 11Z"
      />
      <path d="M20 16H7C5.34315 16 4 17.3431 4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V16Z" />
    </svg>
  );
}
