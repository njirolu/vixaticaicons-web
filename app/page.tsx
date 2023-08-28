import Header from "@/components/Header";
import Content from "@/components/Content";

interface IconResponse {
  name: string;
  identifier: string;
  svg: string;
  type: string;
}

const getIcons = async (): Promise<IconResponse[]> => {
  const data = await fetch(
    "https://raw.githubusercontent.com/njirolu/vixatica-icons/main/static/data/icons.json"
  );
  const icons = await data.json();
  return icons;
};

export default async function Home() {
  const icons = await getIcons();
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-10 md:pb-12 md:pt-10 lg:pt-24 lg:pb-14">
          <div className="[@media(min-width:1400px)]:max-w-[1400px] w-full mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <a
              className="rounded-2xl bg-[#f1f5f9] px-4 py-1.5 text-sm font-medium"
              target="_blank"
              href="https://twitter.com/njirolu"
            >
              Follow along on Twitter
            </a>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] ">
              Exclusive Icon library for Various UI Needs!
            </h1>

            <div className="flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
              <p>198 icons</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <p>MIT license</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <p>React, Solid, Svelte &amp; Vue libraries</p>
            </div>

            <p className="max-w-[42rem] leading-normal text-zinc-600 sm:text-xl sm:leading-8">
              Vixatica Illustrations is a thoughtfully curated set of
              open-source illustrations.
            </p>

            <div className="mt-6 flex justify-center gap-8 lg:justify-start">
              <a
                className="rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5"
                href="https://github.com/njirolu/vixatica-icons"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-900"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                  ></path>
                </svg>
                Documentation
              </a>
              <a
                className="rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5"
                href="https://www.figma.com/community/file/1268339281294122542"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke-width=".895"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M11.554 4v-.447H8.738a2.553 2.553 0 1 0 0 5.105H11.554V4Z"
                    fill="#DF5A33"
                    stroke="#DF5A33"
                  ></path>
                  <path
                    d="M11.554 9.895v-.448H8.738a2.553 2.553 0 0 0 0 5.106H11.554V9.895Z"
                    fill="#985CF7"
                    stroke="#985CF7"
                  ></path>
                  <path
                    d="M11.554 15.79v-.448H8.738a2.553 2.553 0 0 0 0 5.105h.132a2.684 2.684 0 0 0 2.684-2.684V15.79Z"
                    fill="#5ECC89"
                    stroke="#5ECC89"
                  ></path>
                  <path
                    d="M15.262 9.447a2.553 2.553 0 1 1 0 5.106h-.263a2.553 2.553 0 0 1 0-5.106h.263Z"
                    fill="#57B9F8"
                    stroke="#57B9F8"
                  ></path>
                  <path
                    d="M12.446 4v-.447H15.262a2.553 2.553 0 1 1 0 5.105H12.446V4Z"
                    fill="#EE7A69"
                    stroke="#EE7A69"
                  ></path>
                </svg>
                Get Figma File
              </a>
            </div>
          </div>
        </section>
        <Content icons={icons} />
      </main>
    </div>
  );
}
