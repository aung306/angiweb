import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: Graphic Design" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200">
            <h1 className="text-6xl animate-fade-down animate-pulse mt-24 mb-12 font-bold leading-7 text-pink-400">
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
            <ul className="pr-6 pl-6 mx-auto max-w-6xl p-4 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-white">
              <li>
                  <p className="animate-fade-down font-semibold m-6 text-md h-10 leading-8 text-pink-300">
                  <a href="#uiux" className="m-3 hover:text-pink-400">ui/ux design</a>  -  
                  <a href="#graphic" className="m-3 hover:text-pink-400">graphic design</a>
                  </p>
              </li>
              <li>
                <p id="uiux"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Ui/Ux Design
                </p>
              </li>
              <li>
                <p id="graphic"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Graphic Design
                </p>
                <p
                  className="animate-fade-down font-semibold m-12 mb-4 text-xl leading-8 text-pink-400"
                >
                  <a className="underline text-pink-700"href="https://www.linkedin.com/company/the-society-of-pc-building/">Society of PC Building</a> - Multimedia Director
                </p>
                <p className="text-pink-900 font-medium">Spring 2022 - present</p>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-lg">
                      <a>Responsibilities</a>
                    </li>
                    <li className="p-4">
                      <p className="font-semibold text-pink-400">Being the co-founder & on the executive board, I lead both the Social Platforms Team & Stream Team</p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Multimedia Director- </a>Create graphics using Canva for organization events and meetings.</p>
                      <p><a className="font-bold">Social Platforms Team Lead- </a>Lead a team of 4 to maintain organization's Instagram, Discord, LinkedIn, and Youtube</p>
                      <p><a className="font-bold">Stream Team Lead- </a>Co-lead a team of 4 to coordinate live streaming PC builds on Twitch & Youtube</p>
                    </li>
                  </ul>
                </div>
                <div className="animate-fade-down flex justify-center mt-6 mb-4 text-pink-400 font-medium">
                    <a href="https://www.instagram.com/pcbuildinguf/" className="animate-bounce p-2 pl-4 pr-4 rounded-xl bg-pink-100">
                    click here to see my work!
                    </a>
                </div>
                <div className="animate-fade-down flex justify-center mt-6 mb-4 text-pink-900 text-sm font-semibold">
                    Clicking the link will navigate to Society of PC Building's Instagram page. All graphics were made by me on Canva.
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