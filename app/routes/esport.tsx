import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: Esports" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200 font-['Cambria']">
            <h1 className="text-6xl animate-fade-down animate-pulse mt-24 mb-24 font-serif font-bold leading-7 text-pink-400">
              Esports
            </h1>
            <div className="animate-fade-down mt-6 mb-10 text-pink-900 text-lg font-bold">
              <a className="m-6 p-2 hover:text-pink-400" href="/aboutme">
                    about me
              </a>
              ~
              <a className="m-6 p-2 hover:text-pink-400" href="/socials">
                    socials
              </a>
              <div className="flex justify-center mt-6 mb-6 text-pink-900 text-sm font-medium">
                  <a className=" m-3 p-2 pl-4 pr-4 rounded-md bg-pink-200 hover:text-pink-400" href="/">
                  back
                  </a>
                </div>
            </div>
            <ul className="pr-6 pl-6 mx-auto max-w-6xl p-4 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-gray-50">
              <li>
              <p
                  className="animate-fade-down font-['Vivaldi'] m-10 mb-2 text-5xl text-brown-800"
                >
                  Valorant
                </p>
              <p className="animate-fade-down p-4 text-pink-700">I am actively seeking a spot on a <a className="font-bold">NA Game Changers Valorant </a> team. </p>
              <div className="p-4 animate-fade-down flex justify-center mb-6 text-pink-900">
                  <div className="text-left leading-16 p-2 pr-10 pl-10 mx-auto max-w-5xl p-4 divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                      <p><a href="https://tracker.gg/valorant/profile/riot/angi%23chi/overview" className="font-bold">Peak Rank: </a>Ascendant 1</p>
                      <p><a className="font-bold">Primary Role: </a>Sentinel & Smokes</p>
                  </div>
              </div>
              <p className="animate-fade-up font-semibold text-3xl p-2 leading-8 text-pink-400">
                    Competitive Scene Experience
              </p>
              <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-xl">
                      <a>UFFSA WolfPack Tournament</a>
                    </li>
                    <li className="p-4">
                      <p className="">16-team tourney competing for $1000 donation to charity of choice </p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Placement: </a>Semifinalists</p>
                      <p><a className="font-bold">Team Name: </a>BWTHB</p>
                      <p><a className="font-bold">Role: </a>IGL</p>
                      <p><a className="font-bold">Key Notes: </a>Forfeited due to a member catching Covid </p>
                    </li>
                  </ul>
                </div>
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