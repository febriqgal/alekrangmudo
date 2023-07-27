import React from "react";

export default function GiftIcon({
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
        d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.37604 7.58405C5.60581 7.23941 6.07146 7.14628 6.4161 7.37604L10.1973 9.89684C11.289 10.6246 12.7112 10.6246 13.8029 9.89684L17.5841 7.37604C17.9287 7.14628 18.3944 7.23941 18.6241 7.58405C18.8539 7.9287 18.7608 8.39435 18.4161 8.62412L14.6349 11.1449C13.0394 12.2086 10.9608 12.2086 9.36525 11.1449L5.58405 8.62412C5.23941 8.39435 5.14628 7.9287 5.37604 7.58405Z"
      />
    </svg>
  );
}
