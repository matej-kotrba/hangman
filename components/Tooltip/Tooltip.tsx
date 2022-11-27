import React from "react";

function Tooltip({
  title,
  arrow,
  children,
}: {
  title: string;
  arrow?: boolean;
  children: React.ReactElement;
}) {
  return (
    <span className="group relative">
      <div
        className={`absolute p-4 text-white bg-[#333333] opacity-0 group-hover:opacity-100 
        pointer-events-none bottom-[100%] text-[1rem] whitespace-nowrap left-[50%]
        translate-x-[-50%] translate-y-[-20%] grid place-items-center rounded-md duration-100
        ${
          arrow
            ? "before:content-[''] before:absolute before:w-[15px] before:h-[15px] " +
              "before:left-[50%] before:top-[80%] before:bg-[#333333] before:translate-x-[-50%] before:rotate-45"
            : ""
        }`}
      >
        <span>{title}</span>
      </div>
      {children}
    </span>
  );
}

export default Tooltip;
