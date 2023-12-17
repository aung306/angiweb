import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200">
            <p className="text-6xl animate-fade-down animate-pulse mt-24 mb-12 font-bold leading-7 text-pink-400">
              Angela Ung
            </p>
            <div className="animate-fade-down mt-6 mb-28 text-pink-900 text-lg font-medium">
              <a className="m-6 p-2 hover:text-pink-400" href="/aboutme">
                    about me
              </a>
              <a> ~ </a>
              <a className="m-6 p-2 hover:text-pink-400" href="/socials">
                    socials
              </a>
            </div>
            <ul className="pr-6 pl-6 mx-auto max-w-6xl p-4 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-white">
              <li>
                <p
                  className="animate-fade-down font-semibold mt-6 mb-10 text-lg h-10 leading-8 text-pink-500 mt-0"
                >
                  Welcome to my personal website! Click one of the tabs below to learn more about me.
                </p>
              </li>
              <li className="animate-fade-up text-center mb-20 content-center">
                <div className="flex justify-center mt-12 mb-2 text-pink-900 text-lg font-medium">
                  <a className="m-6 p-4 rounded-md bg-pink-200 hover:text-pink-400" href="/swe">
                  software engineering experience
                  </a>
                  <a className=" m-6 p-4 rounded-md bg-pink-200 hover:text-pink-400" href="/graphic">
                  graphic design portfolio
                  </a>
                  <a className=" m-6 p-4 rounded-md bg-pink-200 hover:text-pink-400" href="/esport">
                  esports career
                  </a>
                </div>
              </li>
            </ul>
    </div>
  );
}
