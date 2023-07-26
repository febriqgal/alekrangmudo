import React from "react";

export default function FacebookIcon({
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
        d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z"
      />
      <path d="M17 7H14.5C12.2909 7 10.5 8.79086 10.5 11V13H7V16H10.5V22H13.5V16H17V13H13.5V11C13.5 10.4477 13.9477 10 14.5 10H17V7Z" />
    </svg>
  );
}
