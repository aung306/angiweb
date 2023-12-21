import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: SWE" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200">
            <div>
              <p className="text-6xl animate-fade-down animate-pulse mt-24 mb-12 font-bold leading-7 text-pink-400">
                Angela Ung
              </p>
            </div>
            <div className="animate-fade-down mt-6 mb-28 text-pink-900 text-lg font-medium">
              <a className="m-6 p-2 hover:text-pink-400" href="/aboutme">
                    about me
              </a>
              ~
              <a className="m-6 p-2 hover:text-pink-400" href="/socials">
                    socials
              </a>
            </div>
            <ul className="pr-6 pl-6 mx-auto max-w-5xl p-4 divide-y divide-gray-300 mb-20 rounded-md border border-gray-300 bg-white">
              <li>
                <p className="animate-fade-down font-semibold m-6 text-md h-10 leading-8 text-pink-300">
                 <a href="#education" className="m-3 hover:text-pink-400">education</a>  -  
                 <a href="#intern" className="m-3 hover:text-pink-400">internships</a>  -  
                 <a href="#projects" className="m-3 hover:text-pink-400">projects</a>
                </p>
              </li>
              <li>
                <p id="education"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Education
                </p>
                <p
                  className="animate-fade-down font-semibold m-12 text-xl h-10 leading-8 text-pink-400"
                >
                  B.S. in Computer Science at <a href="https://www.ufl.edu/" className="underline text-pink-700">University of Florida</a>'s <a href="https://www.eng.ufl.edu/" className="underline text-pink-700">College of Engineering</a>
                </p>
                <div className="animate-fade-down flex justify-center m-12 text-pink-400 font-medium">
                    <p className="animate-fade-down p-2 pl-4 pr-4 rounded-xl bg-pink-100">
                    No. 1 Public University of 2023 - <a href="https://www.wptv.com/news/state/university-of-florida-ranked-no-1-public-school-in-nation-by-wall-steet-journal" className="underline text-pink-700">Wall Street Journal</a>
                    </p>
                </div>
                <p
                  className="animate-fade-down font-bold m-4 mb-16 text-xl h-10 leading-8 text-pink-400"
                >
                  <a className="text-orange-400">Go</a> <a className="text-blue-400">Gators!</a>
                </p>
              </li>
              <li>
                <p id="intern"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Internships
                </p>
                <p
                  className="animate-fade-down font-semibold m-12 text-xl leading-8 text-pink-400"
                >
                  Ultimate Kronos Group (UKG) - Software Engineering Intern
                </p>
                <p
                  className="animate-fade-down animate-pulse m-6 text-md leading-8 text-pink-400"
                >
                  What did I do there?
                </p>
                <div className="ease-in leading-12">
                <div className="animate-fade-down flex justify-center mt-6 mb-4 text-pink-900 text-md font-medium">
                    <a className="hover:animate-bounce m-3 p-2 pl-4 pr-4 rounded-md bg-pink-200 hover:text-pink-400" href="#projects">
                    click here to see my internship projects!
                    </a>
                </div>
                <p
                   className="animate-fade-up m-16 mb-4 text-md p-3 font-semibold leading-10 text-pink-700">
                    <a className="text-4xl font-['Arial']">" </a>
                    Angela took and delivered on an actual project where she built the frontend for a new internal tool. 
                    She had to learn a new tech stack; she took that up as a challenge and was able to learn it very quickly and was able to start contributing in just a couple of days. 
                    She also did a demo of the project to a large audience that was very well received.           
                    <a className="text-4xl font-['Arial']"> "</a>     
                </p>
                <p className="text-pink-600 animate-fade-up font-semibold mb-16">- <a href="https://www.linkedin.com/in/kaushaldalvi/" className="underline text-pink-700">Kaushal Dalvi</a></p>
                </div>
                <div className="animate-fade-down flex justify-center mt-6 mb-4 text-pink-400 font-medium">
                    <a className="animate-bounce p-2 pl-4 pr-4 rounded-xl bg-pink-100">
                    watch my demo below!
                    </a>
                </div>
                <div className="p-8 flex items-center justify-center">
                      <iframe className="rounded-xl w-full aspect-video" src="https://www.youtube-nocookie.com/embed/9zLWJ84KNis">hello!</iframe>
                </div>
              </li>
              <li>
                <p id="projects"
                  className="animate-fade-up font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Projects
                </p>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-xl">
                      pTick
                    </li>
                    <li className="p-4">
                      <p className="">Orchestrator application that utilizes REST APIs, enabling non-software engineers to conduct LoadRunner performance testing on UKG's internal environments by providing a user-friendly interface and easy to understand results that automatically get emailed to the user. </p>
                    </li>
                    <li className="text-left p-4">
                      <p className="">UKG Internship Project</p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">TypeScript || Remix || NodeJS || TailwindCSS || Git || Kubernetes || Docker || Rest APIs || Axios || NestJS || VSCode || TSX </p>
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
