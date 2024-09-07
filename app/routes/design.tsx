import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: Graphic Design" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-200 font-['Cambria']">
            <h1 className="text-6xl animate-fade-down animate-pulse mt-24 mb-24 font-serif font-bold leading-7 text-pink-400">
              UI/UX & Graphic Design
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
                  <p className="animate-fade-down font-semibold m-6 text-md h-10 leading-8 text-pink-300">
                  <a href="#uiux" className="m-3 hover:text-pink-400">ui/ux design</a>  -  
                  <a href="#graphic" className="m-3 hover:text-pink-400">graphic design</a>
                  </p>
              </li>
              <li>
                <p id="uiux"
                  className="animate-fade-down font-['Vivaldi'] m-10 p-4 text-5xl text-brown-800"
                >
                  Ui/Ux Design
                </p>
                <p
                  className="animate-fade-down font-bold m-12 text-3xl leading-8 text-pink-400"
                >
                  <a className="underline text-pink-700" href="/swe#projects">pTick</a> - UKG Internship
                </p>
                <p className="animate-fade-down text-pink-900 font-medium mb-8">Summer 2023</p>
                <div className="p-4 animate-fade-right flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-pink-200 rounded-md border border-gray-300 bg-pink-50">
                  <li className="p-2">
                      <p className="font-semibold mb-2 text-lg">Problem Statement</p>
                  </li>
                    <li className="p-2">
                      <p className="font-semibold text-sm leading-8 text-pink-400">
                        Every engineer needs to conduct performance testing on cloud infrastructure, but not every engineer knows how to.
                        As an intern of UKG's Performance Team, I was tasked in creating a scalable front-end application that was so easy to understand that non-engineers could get emails with tailored performance results of their environments in three button clicks.
                        </p>
                    </li>
                  </ul>
                </div>
                <div className="animate-fade-right flex items-center p-4 mt-10 mb-10">
                  <div className="text-left p-4">
                    <p className="p-2 font-bold text-3xl text-pink-800">User Flows</p>
                    <a className="flex p-2 leading-8">I held four meetings with the Product Owner, the Performance Engineer Architect, and the Senior Performance Engineer to understand the purpose of this application. We discussed what a typical individual must go through to conduct performance testing. We wanted to simplify this process to under a minute.</a>
                  </div>
                  <img className="ml-auto flex justify-end w-1/2 h-1/2 rounded-xl mb-4" src="/images/ptick1.jpg"/>
                </div>
                <div className="animate-fade-right flex items-center p-4 mt-10 mb-10">
                <img className="flex w-1/3 h-1/3 rounded-xl mb-4" src="/images/ptick2.jpg"/>
                  <div className="text-right p-4">
                    <p className="p-2 font-bold text-3xl text-pink-800">Wireframes</p>
                    <a className="flex p-2 leading-8">This was the prototype sketch of the interface. We believed it was too cluttered and the content was overwhelming. We wanted to mask the complications and create a seamless process that could be understood by non-software engineers.</a>
                  </div>
                </div>
                <div className="animate-fade-right flex items-center p-4 mt-10">
                  <div className="text-left p-4">
                    <p className="p-2 font-bold text-3xl text-pink-800">Demonstration</p>
                    <a className="flex p-2 leading-8">
                     Here is the final prototype that I presented to my department of over 100+ engineers.
                     The department saw great value in my prototype and wanted to invest in expanding to multiple types of architecture testing.
                     For this UX design, we wanted to focus on an interface that was self-explanatory and self-populating. We utilized SSO authentication to predict common environment URLs the team members use so that our users did not have to figure out what environment URLs are.
                     </a>
                  </div>
                </div>
                <div className="p-8 mb-10 flex items-center justify-center">
                      <iframe className="rounded-xl w-full aspect-video" src="https://www.youtube-nocookie.com/embed/9zLWJ84KNis"/>
                </div>
                <p
                  className="animate-fade-down font-bold m-12 pt-10 text-3xl leading-8 text-pink-400"
                >
                  <a className="underline text-pink-700" href="/swe#projects">UKG Real</a> - UKG Internship
                </p>
                <p className="animate-fade-down text-pink-900 font-medium mb-8">Summer 2023</p>
                <div className="p-4 animate-fade-right flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-pink-200 rounded-md border border-gray-300 bg-pink-50">
                  <li className="p-2">
                      <p className="font-semibold mb-2 text-lg">Problem Statement</p>
                  </li>
                    <li className="p-2">
                      <p className="font-semibold text-sm leading-8 text-pink-400">
                        Rating an employee's mood on a numerical scale is difficult to interpret since emotions are not quantifiable.
                        Having an email extension that allowed employees to note specific emotions could help employers correlate the effects of work events on the production and motivation of their employees.
                        </p>
                    </li>
                  </ul>
                </div>
                <div className="animate-fade-right flex items-center p-4 mt-10 mb-10">
                  <div className="text-left p-4">
                    <p className="p-2 font-bold text-3xl text-pink-800">User Flows</p>
                    <a className="flex p-2 leading-8">As the Product Owner, I wanted to focus on the ease of logging employee moods.
                    When our user lands on the check-up page, all they should do is access a dropdown to choose their mood, and then click submit.
                    Effortlessness is our key attribute. We do not want our users to feel overwhelmed by a simple task that was intended to better cater to their work culture.</a>
                  </div>
                  <img className="ml-auto flex justify-end w-1/3 h-1/3 rounded-xl mb-4" src="/images/real1.jpg"/>
                </div>
                <div className="animate-fade-right flex items-center p-4 mt-10 mb-10">
                <img className="flex w-1/3 h-1/3 rounded-xl mb-4" src="/images/real2.jpg"/>
                  <div className="text-right p-4">
                    <p className="p-2 font-bold text-3xl text-pink-800">Wireframes</p>
                    <a className="flex p-2 leading-8">For the employer's dashboard view, we wanted to include an easy to access analysis of their employee's emotions over a period of time.
                    We also wanted to create an extension of this application on Microsoft Teams or Outlook so that logging moods is as simple as opening an email.
                    </a>
                  </div>
                </div>
                <div className="animate-fade-right flex items-center p-4 mt-10 mb-10">
                  <div className="text-left p-4">
                    <p className="p-2 font-bold text-3xl text-pink-800">Demonstration</p>
                    <a className="flex p-2 leading-8">UKG Real was created using a Remix framework and TypeScript/TSX tech stacks with Tailwind CSS.
                    We decided to focus on the reactivity of the application, ensuring that the mood logging process is seamless and effortless.
                    A complicated process could deter potential users, so we also ensured that the displayed data was not cluttered or overwhelming.</a>
                  </div>
                  <img className="ml-auto justify-end w-1/2 h-1/2 rounded-xl" src="/images/real3.png"/>
                </div>
                <div>
                  <img className="ml-auto justify-end w-1/2 h-1/2 rounded-xl mb-4" src="/images/real4.png"/>
                  <img className="ml-auto justify-end w-1/2 h-1/2 rounded-xl mb-4" src="/images/real5.png"/>
                </div>
                <div className="animate-fade-down flex justify-center mt-6 mb-4 text-pink-900 text-sm font-semibold">
                    <p>These are just two of the several UI/UX design projects I have completed, including this website! <a className="underline text-pink-700"href="/swe#projects"> Click here</a> to see my other projects!</p>
                </div>
              </li>
              <li>
                <p id="graphic"
                  className="animate-fade-down font-['Vivaldi'] m-10 p-4 text-5xl text-brown-800"
                >
                  Graphic Design
                </p>
                <p
                  className="animate-fade-down font-bold m-12 text-3xl leading-8 text-pink-400"
                >
                  <a className="underline text-pink-700"href="https://www.linkedin.com/company/the-society-of-pc-building/">Society of PC Building</a> - Multimedia Director
                </p>
                <p className="text-pink-900 font-medium mb-8">Spring 2022 - present</p>
                <div className="p-4 animate-fade-up flex justify-center mb-6 text-pink-900">
                  <ul className="pr-10 pl-10 mx-auto max-w-5xl p-4 divide-y divide-pink-200 rounded-md border border-gray-300 bg-pink-50">
                    <li className="font-semibold mb-2 text-lg p-2">
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