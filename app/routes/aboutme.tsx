import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: Angi!" },
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
      <ul className="font-['Cambria'] pr-6 pl-6 mx-auto max-w-6xl p-8 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-gray-50">
        <li>
          <p
            className="ml-20 mr-20 animate-fade-down mt-6 mb-10 text-lg h-10 leading-8 text-pink-500 mt-0"
          >
            I am currently set to graduate from the University of Florida with a B.S. in Computer Science in May 2025. I am interested in new graduate or associate software engineering positions.
          </p>
          <p
            className="ml-20 mr-20 animate-fade-down font-semibold mb-20 text-sm h-10 leading-8 text-pink-500 mt-0"
          >
            I firmly believe the most important aspect of a company is their culture.
            An environment where individuals are empowered results in higher productivity and more engagement.
            I would love to work in a people-oriented team where she can intrinsically motivate others and vice versa.
          </p>
      </li>
      </ul>
    </div>
  );
}