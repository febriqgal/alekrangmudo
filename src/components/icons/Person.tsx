import React from "react";

export default function PersonIcon({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.4" cx="15" cy="8" r="3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.115 18.9483C16.6788 18.3718 17.0001 17.7073 17.0001 17C17.0001 15.2987 15.1413 13.8455 12.521 13.2672C13.2766 13.0956 14.116 13 15.0001 13C18.3138 13 21.0001 14.3431 21.0001 16C21.0001 17.4664 18.896 18.687 16.115 18.9483Z"
      />
      <ellipse opacity="0.4" cx="10" cy="17" rx="7" ry="4" />
      <circle cx="10" cy="7" r="4" />
    </svg>
  );
}
