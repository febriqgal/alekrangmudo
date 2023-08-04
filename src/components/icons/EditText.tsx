import React from "react";

export default function EditTextIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 20C4.25 19.5858 4.58579 19.25 5 19.25H19C19.4142 19.25 19.75 19.5858 19.75 20C19.75 20.4142 19.4142 20.75 19 20.75H5C4.58579 20.75 4.25 20.4142 4.25 20Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.25C12.3027 3.25 12.5758 3.43205 12.6923 3.71154L17.6923 15.7115C17.8516 16.0939 17.6708 16.533 17.2884 16.6923C16.9061 16.8516 16.467 16.6708 16.3076 16.2885L14.8333 12.75H9.16662L7.69226 16.2885C7.53295 16.6708 7.09384 16.8516 6.71149 16.6923C6.32914 16.533 6.14833 16.0939 6.30764 15.7115L11.3076 3.71154C11.4241 3.43205 11.6972 3.25 12 3.25ZM9.79162 11.25H14.2083L12 5.95L9.79162 11.25Z"
      />
    </svg>
  );
}
