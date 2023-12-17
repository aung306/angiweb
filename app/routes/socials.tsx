import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: Socials" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200">
<<<<<<< HEAD:app/routes/socials.tsx
            <h1 className="text-6xl animate-fade-down animate-pulse mt-24 mb-12 font-bold leading-7 text-pink-400">
=======
            <h1 className="text-6xl animate-fade-down animate-pulse text-base mt-24 mb-12 font-bold leading-7 text-pink-400">
>>>>>>> 1273258d74273d2dbc22eb02134cf700fbed6a18:app/routes/socials._index.tsx
              Angela Ung
            </h1>
            <div className="animate-fade-down mt-6 mb-28 text-pink-900 text-lg font-medium">
              <a className="m-6 p-2 hover:text-pink-400" href="/aboutme">
                    about me
              </a>
              <a> ~ </a>
              <a className="m-6 p-2 hover:text-pink-400" href="/socials">
                    socials
              </a>
            </div>
            <ul className="pr-6 pl-6 mx-auto max-w-3xl p-4 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-white">
              <li>
                <p
                  className="animate-fade-down font-semibold mt-6 text-lg h-10 leading-8 text-pink-300 mt-0"
                >
                  Welcome to my socials page!
                </p>
                <p
                  className="animate-fade-down font-semibold mb-10 text-lg h-10 leading-8 text-pink-600 mt-0"
                >
                  angelaung@ufl.edu
                </p>
              </li>
              <li>
                <p
                  className="flex animate-fade-down font-semibold mt-12 m-6 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  <a href="https://www.linkedin.com/in/angelaunguf">click to see my linkedin</a>
                </p>
                <p
                  className="flex animate-fade-down font-semibold m-6 mb-10 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  <a href="https://www.github.com/aung306">click to see my github</a>
                </p>
              </li>
              <li className="animate-fade-up text-center mb-10 content-center">
                <div className="flex justify-center mt-6 mb-6 text-pink-900 text-lg font-medium">
                  <a className=" m-3 p-2 pl-4 pr-4 rounded-md bg-pink-200 hover:text-pink-400" href="/">
                  back
                  </a>
                </div>
              </li>
            </ul>
    </div>
  );
}