import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3: Angi!" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[url('../img/cherry.gif')] bg-no-repeat bg-cover text-center py-24 bg-gray-100">
            <h1 className="text-5xl animate-fade-down text-base mt-24 mb-12 font-bold leading-7 text-pink-400">
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
            <ul className="pr-6 pl-6 mx-auto max-w-4xl p-4 divide-y divide-gray-100 mb-20 rounded-md border border-gray-200 bg-white">
              <li>
                <p
                  className="animate-fade-down font-semibold mt-6 mb-20 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  I am a full stack developer currently in her junior year at the University of Florida. I am open to full time positions in software engineering, graphic design, and esports. 
                  Click the back button to learn more about my qualifications! Interested? Find my email in my socials!
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