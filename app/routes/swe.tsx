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
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200 font-['Cambria']">
            <div>
              <p className="text-6xl animate-fade-down animate-pulse mt-24 mb-24 font-serif font-bold leading-7 text-pink-400">
                Software Engineering
              </p>
            </div>
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
            <ul className="pr-6 pl-6 mx-auto max-w-5xl p-4 divide-y divide-gray-300 mb-20 rounded-md border border-gray-300 bg-gray-50">
              <li>
                <p className="animate-fade-down font-semibold m-6 text-md h-10 leading-8 text-pink-300">
                 <a href="#education" className="m-3 hover:text-pink-400">education</a>  -  
                 <a href="#intern" className="m-3 hover:text-pink-400">internships</a>  -  
                 <a href="#projects" className="m-3 hover:text-pink-400">projects</a>
                </p>

              </li>
              <li>
                <p id="education"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-5xl text-brown-800"
                >
                  Education
                </p>
                <p
                  className="animate-fade-down font-semibold m-12 text-2xl h-10 leading-8 text-pink-400"
                >
                  B.S. in Computer Science at <a href="https://www.ufl.edu/" className="underline text-pink-700">University of Florida</a>'s <a href="https://www.eng.ufl.edu/" className="underline text-pink-700">College of Engineering</a>
                </p>
                <div className="animate-fade-down flex justify-center m-12 text-pink-400 font-medium">
                    <p className="animate-fade-down p-2 pl-4 pr-4 rounded-xl bg-pink-100">
                    No. 1 Public University of 2023 - <a href="https://www.wptv.com/news/state/university-of-florida-ranked-no-1-public-school-in-nation-by-wall-steet-journal" className="underline text-pink-700">Wall Street Journal</a>
                    </p>
                </div>
                <p
                  className="animate-fade-down font-bold m-4 text-xl h-10 leading-8 text-pink-400"
                >
                  <a className="text-orange-400">Go</a> <a className="text-blue-400">Gators!</a>
                </p>
                <div className="p-4 animate-fade-down flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="text-left font-semibold text-pink-700">
                      <p><a className="font-bold">Languages: </a> Java | C/C++ | JavaScript | MATLAB | ARM</p>
                      <p><a className="font-bold">Courses: </a> Data Structures & Algorithms | Operating Systems | Network Fundamentals | Software Enterprise Practices</p>
                      <p><a className="font-bold">Tools: </a> AWS | Angular | Agile | Wireframes | VSCode</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p id="intern"
                  className="animate-fade-down font-['Vivaldi'] m-10 text-5xl text-brown-800"
                >
                  Internships
                </p>
                <p
                  className="animate-fade-down font-semibold m-12 text-3xl leading-8 text-pink-400"
                >
                  Ultimate Kronos Group (UKG) - Software Engineering Intern Summer 2023
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
                      <iframe className="rounded-xl w-full aspect-video" src="https://www.youtube-nocookie.com/embed/9zLWJ84KNis"/>
                </div>
                <div className="p-4 animate-fade-down flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="text-left font-semibold text-pink-700">
                      <p><a className="font-bold">Tech Stack: </a> TypeScript/TSX/Tailwind CSS</p>
                      <p><a className="font-bold">Tools: </a> Remix/React | Node.js | Agile | NestJS | Mocha | Kubernetes | Docker | GitHub Actions | REST APIs | Postman</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p id="projects"
                  className="animate-fade-up font-['Vivaldi'] m-10 text-5xl text-brown-800"
                >
                  Projects
                </p>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-3xl p-4">
                      <a href="https://github.com/aung306/angiweb">AngiWeb</a>
                    </li>
                    <li className="p-4">
                      <p className="">Personal portfolio with a Remix frontend & CI/CD. Heavy focus on embedding external applications that showcase different field experiences. </p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Project Type: </a>Personal Project</p>
                      <p><a className="font-bold">Timeline: </a>Winter 2023</p>
                      <p><a className="font-bold">Role: </a>Owner</p>
                      <p><a className="font-bold">Key Notes: </a>Beginner-friendly documentation for website deployment. </p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">TypeScript || Remix || NodeJS || Tailwind CSS || Git || Fly.io || VSCode || TSX </p>
                    </li>
                  </ul>
                </div>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-3xl p-4">
                      pTick
                    </li>
                    <li className="p-4">
                      <p className="">Orchestrator application that utilizes REST APIs, enabling non-software engineers to conduct LoadRunner performance testing on UKG's internal environments by providing a user-friendly interface and easy to understand results that automatically get emailed to the user. </p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Project Type: </a>UKG Internship</p>
                      <p><a className="font-bold">Timeline: </a>Summer 2023</p>
                      <p><a className="font-bold">Role: </a>Product Lead & Fullstack Developer</p>
                      <p><a className="font-bold">Key Notes: </a>Owned project from ground up and included scalability for parameters & test suites</p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">TypeScript || Remix || NodeJS || Tailwind CSS || Git || Kubernetes || Docker || Rest APIs || Axios || NestJS || VSCode || TSX </p>
                    </li>
                  </ul>
                </div>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-3xl p-4">
                    <a href="https://github.com/angela-ung/riverwalk">UKG Real</a>
                    </li>
                    <li className="p-4">
                      <p className="">Frontend extension that recorded work-related moods and congregated results in ChartJS to understand the effects of work events on motivation.</p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Project Type: </a>UKG Internship</p>
                      <p><a className="font-bold">Timeline: </a>Summer 2023</p>
                      <p><a className="font-bold">Role: </a>Product Lead & Frontend Developer</p>
                      <p><a className="font-bold">Key Notes: </a>Contributed over 80% of code for 48-hour hackathon project in intern team of 3</p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">TypeScript || Remix || NodeJS || Tailwind CSS || Git || ChartJS || VSCode || TSX </p>
                    </li>
                  </ul>
                </div>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-3xl p-4">
                    <a href="https://github.com/100-Incorporated">E-Colosseum</a>
                    </li>
                    <li className="p-4">
                      <p className="">E-Colosseum is a PVP web application that tests players in brain coordination with the integration of stock market trading to analyze the effects of stakes on performance.</p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Project Type: </a>University Project</p>
                      <p><a className="font-bold">Timeline: </a>Spring 2023</p>
                      <p><a className="font-bold">Role: </a>Scrum Master & Frontend Developer</p>
                      <p><a className="font-bold">Key Notes: </a>Created landing page, a typing game, and login feature. Worked in a student team of 4</p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">JavaScript || Angular || NodeJS || HTML/CSS || Git || Angular || Go || VSCode || Frontend Development </p>
                    </li>
                  </ul>
                </div>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-3xl p-4">
                    <a href="https://github.com/AkshayAshok2/family-guy-search-engine">Lightweight Optimal Integrated Search (LOIS)</a>
                    </li>
                    <li className="p-4">
                      <p className="">LOIS is a search engine that utilizes BP-DP & filter search to traverse a dataset of over 100,000 of English television series scripts.</p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Project Type: </a>University Project</p>
                      <p><a className="font-bold">Timeline: </a>Fall 2022</p>
                      <p><a className="font-bold">Role: </a>Scrum Master & Frontend Developer</p>
                      <p><a className="font-bold">Key Notes: </a>Final project in a student team of 3</p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">JavaScript || HTML/CSS || Git || VSCode || Data Structures || Frontend Development </p>
                    </li>
                  </ul>
                </div>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-gray-300 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-3xl p-4">
                    HandSpeak
                    </li>
                    <li className="p-4">
                      <p className="">HandSpeak is a medical product designed to aid those who suffer from ALS or other major disruptive paralysis. This device intakes slight vibrations of Morse code and then translates into a message.</p>
                    </li>
                    <li className="text-left leading-16 p-4 pl-12 pr-12">
                      <p><a className="font-bold">Project Type: </a>University Project</p>
                      <p><a className="font-bold">Timeline: </a>Spring 2022</p>
                      <p><a className="font-bold">Role: </a>Backend Developer & Researcher</p>
                      <p><a className="font-bold">Key Notes: </a>Used Tinkercad to demonstrate wiring of prototype</p>
                    </li>
                    <li className="font-semibold text-pink-800 pt-4 pb-4">
                      <p className="">C || Arduino || Open Source || TinkerCad</p>
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
