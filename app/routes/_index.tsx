import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="lg:text-center py-16 bg-gray-100">
            <h2 className="animate-fade-down text-base font-serif mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-pink-400">
              Angela Ung
            </h2>
            <div className="animate-fade-down mt-6 mb-6 text-pink-900 text-lg font-medium">
              <a className="m-6 p-2 hover:text-pink-400" href="/aboutme">
                    about me
              </a>
              <a> ~ </a>
              <a className="m-6 p-2 hover:text-pink-400" href="/socials">
                    socials
              </a>
            </div>
            <ul className="mx-auto max-w-4xl py-4 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
              <li>
                <p
                  className="animate-fade-down font-semibold font-serif mt-3 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  Welcome to my personal website! Click one of the tabs below to learn more about me.
                </p>
              </li>
              <li className="animate-fade-up text-center">
                <div className="mt-12 mb-12 text-pink-900 text-lg font-medium">
                  <a className="m-6 p-2 rounded-md bg-pink-200 hover:text-pink-400" href="/swe">
                  software engineering experience
                  </a>
                  <a className=" m-6 p-2 rounded-md bg-pink-200 hover:text-pink-400" href="/graphic">
                  graphic design portfolio
                  </a>
                  <a className=" m-6 p-2 rounded-md bg-pink-200 hover:text-pink-400" href="/esports">
                  esports career
                  </a>
                </div>
              </li>
            </ul>
    </div>
  );
}
