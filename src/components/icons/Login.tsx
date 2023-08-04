import React from "react";

export default function LoginIcons({
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
        d="M7 3H11C13.2091 3 15 4.79086 15 7V17C15 19.2091 13.2091 21 11 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967L21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303C17.1768 15.2374 17.1768 14.7626 17.4697 14.4697L19.1893 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H19.1893L17.4697 9.53033C17.1768 9.23744 17.1768 8.76256 17.4697 8.46967Z"
      />
    </svg>
  );
}
