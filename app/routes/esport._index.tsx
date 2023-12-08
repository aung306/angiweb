import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Angela's website" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  return (
    <div className="lg:text-center py-16 bg-gray-100">
            <h2 className="text-base font-serif mt-2 mb-6 text-3xl sm:text-4xl font-bold tracking-tight leading-7 text-pink-400">
              Angela Ung
            </h2>
            <ul className="mx-auto max-w-4xl py-4 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
              <li>
                <p
                  className="font-semibold font-serif mt-3 text-lg h-10 leading-8 text-pink-400 mt-0"
                >
                  Thanks for stopping by! Unfortunately this page is under construction.
                </p>
              </li>
            </ul>
    </div>
  );
}