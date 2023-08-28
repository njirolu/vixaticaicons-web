"use client";
import * as React from "react";
import Icon from "./Icon";

interface ContentProps {
  icons: {
    name: string;
    identifier: string;
    svg: string;
    type: string;
  }[];
}

function Content({ icons }: ContentProps) {
  const [queryParams, setQueryParams] = React.useState({
    type: "all",
    word: "",
  });

  function changeFilterType(type: string) {
    setQueryParams((prevState) => {
      return { ...prevState, type };
    });
  }

  return (
    <>
      <section className="pointer-events-none sticky top-0 z-50 -mb-10 overflow-hidden pb-10 sm:-mb-11 sm:pb-11 md:-mb-12 md:pb-12">
        <div className="relative">
          <div className="pointer-events-auto relative bg-white pb-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] sm:pb-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center">
              <div className="relative flex-auto">
                <input
                  type="search"
                  placeholder="Search all icons..."
                  className="block w-full appearance-none rounded-lg bg-transparent py-6 pl-9 pr-4 text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none"
                  onChange={(e) =>
                    setQueryParams((prevState) => ({
                      ...prevState,
                      word: e.target.value,
                    }))
                  }
                />
                <svg
                  viewBox="0 0 20 20"
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 fill-slate-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <ul className="flex space-x-3">
                <li>
                  <div
                    className={
                      "hover:bg-[#F9C034] hover:text-white px-3 py-2 rounded-md cursor-pointer " +
                      `${
                        queryParams.type === "all"
                          ? "bg-[#F9C034] text-white"
                          : "bg-slate-50"
                      }`
                    }
                    onClick={() => changeFilterType("all")}
                  >
                    All
                  </div>
                </li>
                <li>
                  <div
                    className={
                      "hover:bg-[#F9C034] hover:text-white px-3 py-2 rounded-md cursor-pointer " +
                      `${
                        queryParams.type === "outline"
                          ? "bg-[#F9C034] text-white"
                          : "bg-slate-50"
                      }`
                    }
                    onClick={() => changeFilterType("outline")}
                  >
                    Outline
                  </div>
                </li>
                <li>
                  <div
                    className={
                      "hover:bg-[#F9C034] hover:text-white px-3 py-2 rounded-md cursor-pointer " +
                      `${
                        queryParams.type === "solid"
                          ? "bg-[#F9C034] text-white"
                          : "bg-slate-50"
                      }`
                    }
                    onClick={() => changeFilterType("solid")}
                  >
                    Solid
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-4 pb-16 pt-10 sm:pt-11 md:pt-12">
          {icons
            .filter((icon) => {
              if (queryParams.type === "all") {
                return icon.name.includes(queryParams.word);
              }
              return (
                icon.name.includes(queryParams.word) &&
                icon.type === queryParams.type
              );
            })
            .map((filteredIcon) => (
              <Icon
                key={`${filteredIcon.name}-${filteredIcon.type}`}
                name={`${filteredIcon.name}`}
                svg={filteredIcon.svg}
                code={`<${filteredIcon.identifier} />`}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default Content;
