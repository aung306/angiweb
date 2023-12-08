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
                <p
                  className="animate-fade-down animate-pulse m-16 text-sm h-10 leading-8 text-pink-400"
                >
                  No. 1 Public University of 2023 - <a href="https://www.wptv.com/news/state/university-of-florida-ranked-no-1-public-school-in-nation-by-wall-steet-journal" className="underline text-pink-700">Wall Street Journal</a>
                </p>
                <p
                  className="animate-fade-down font-bold m-4 mb-16 text-xl h-10 leading-8 text-pink-400"
                >
                  <a className="text-orange-400">Go</a> <a className="text-blue-400">Gators!</a>
                </p>
              </li>
              <li>
                <p id="intern"
                  className="animate-fade-up font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Internships
                </p>
                <p
                  className="animate-fade-up font-semibold m-12 text-xl leading-8 text-pink-400"
                >
                  Ultimate Kronos Group (UKG) - Software Engineering Intern
                </p>
                <p
                  className="animate-fade-up animate-pulse mb-10 m-6 text-md leading-8 text-pink-400"
                >
                  What did I do there?
                </p>
                <div className="ease-in leading-12">
                  <p
                   className="animate-fade-up mb-2 m-16 text-md leading-8 text-pink-500">
                    During Summer of 2023, I interned for 13 weeks in UKG's Development Acceleration team.
                    I eagerly took the initiative to lead my team's daily stand-up meetings as soon as I understood production in an Agile environment.
                    I gained several skills such as CI/CD pipelines, the SDLC, REST APIs, Kubernetes & Docker, Git, and other essentials when I spearheaded projects assigned to me.

                  </p>
                  <p
                   className="animate-fade-up mb-10 text-md leading-8 text-pink-600">
                    Check out my internship projects below!
                  </p>
                </div>
              </li>
              <li>
                <p id="projects"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-3xl text-brown-800"
                >
                  Projects
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
