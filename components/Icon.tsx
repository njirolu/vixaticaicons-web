"use client";

import * as React from "react";

interface IconProps {
  name: string;
  code: string;
  svg: string;
}

function Icon({ name, code, svg }: IconProps) {
  const [state, setState] = React.useState("idle");

  React.useEffect(() => {
    if (state === "copied") {
      let handle = window.setTimeout(() => {
        setState("idle");
      }, 1000);
      return () => {
        window.clearTimeout(handle);
      };
    }
  }, [state]);

  function onCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setState("copied");
    });
  }

  return (
    <div className="group">
      <div className="relative h-[8.5rem]">
        <button
          onClick={onCopy}
          type="button"
          id="academic-cap-btn"
          className={
            "absolute inset-0 flex h-full w-full cursor-auto items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08] hover:ring-[#F9C034] hover:cursor-pointer transition ease-in-out"
          }
        >
          <div dangerouslySetInnerHTML={{ __html: svg }} />
          <p
            className={
              "absolute inset-x-0 bottom-7 text-center text-[0.8125rem] font-semibold leading-6 text-[#F9C034] " +
              `${
                state === "copied"
                  ? "transition-opacity opacity-100"
                  : "transition-opacity opacity-0"
              }`
            }
          >
            Copied!
          </p>
        </button>
      </div>
      <div
        className="mt-3 h-10 truncate text-center text-[0.8125rem] leading-5 text-slate-500"
        title="academic-cap"
      >
        {name}
      </div>
    </div>
  );
}

export default Icon;
