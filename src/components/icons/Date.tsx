import React from "react";

export default function DateIcon({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V2C15.25 1.58579 15.5858 1.25 16 1.25Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5V2C7.25 1.58579 7.58579 1.25 8 1.25Z"
      />
      <path
        opacity="0.4"
        d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4939 10.4356C15.8056 10.7083 15.8372 11.1822 15.5645 11.4939L12.6946 14.7738C12.0779 15.4786 11.0156 15.5729 10.2843 14.9879L8.53151 13.5857C8.20806 13.3269 8.15562 12.8549 8.41438 12.5315C8.67313 12.208 9.1451 12.1556 9.46855 12.4144L11.2214 13.8166C11.3258 13.9002 11.4776 13.8867 11.5657 13.786L14.4356 10.5061C14.7084 10.1944 15.1822 10.1628 15.4939 10.4356Z"
      />
    </svg>
  );
}