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
    <h1 className="text-9xl animate-fade-down animate-pulse mt-24 mb-24 font-serif font-bold leading-7 text-pink-400">
      Angela Ung
    </h1>
    <div className="animate-fade-down mt-12 mb-10 text-pink-900 text-lg font-['Cambria'] font-bold">
      <a className="m-6 p-2 hover:text-pink-400" href="/aboutme">
        about me
      </a>
      <a> ~ </a>
      <a className="m-6 p-2 hover:text-pink-400" href="/socials">
        socials
      </a>
      <div className="flex justify-center mt-6 mb-6 text-pink-900 text-sm font-medium">
                  <a className=" m-3 p-2 pl-4 pr-4 rounded-md bg-pink-200 hover:text-pink-400" href="/">
                  back
                  </a>
      </div>
    </div>
    <ul className="font-['Cambria'] pr-6 pl-6 mx-auto max-w-6xl p-4 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-gray-50">
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
              <li className="justify-between text-center flex-1">
                <p
                  className="animate-fade-down font-semibold mt-12 m-6 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  <a href="https://www.linkedin.com/in/angelaunguf">click to see my linkedin</a>
                </p>
                <p
                  className="animate-fade-down font-semibold m-6 mb-10 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  <a href="https://www.github.com/aung306">click to see my github</a>
                </p>
              </li>
    </ul>
  </div>
  );
}