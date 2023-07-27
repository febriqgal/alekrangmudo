import React from "react";

export default function ChecklistIcon({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4939 9.43558C15.8056 9.70834 15.8372 10.1822 15.5645 10.4939L12.6946 13.7738C12.0779 14.4786 11.0156 14.5729 10.2843 13.9879L8.53151 12.5857C8.20806 12.3269 8.15562 11.8549 8.41438 11.5315C8.67313 11.208 9.1451 11.1556 9.46855 11.4144L11.2214 12.8166C11.3258 12.9002 11.4776 12.8867 11.5657 12.786L14.4356 9.50613C14.7084 9.1944 15.1822 9.16282 15.4939 9.43558Z"
      />
    </svg>
  );
}
