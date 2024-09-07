import type { MetaFunction } from "@remix-run/node";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const meta: MetaFunction = () => {
  return [
    { title: "AngiWeb <3" },
    { name: "description", content: "Angela Ung's Personal Website" },
  ];
};

export default function Index() {
  const skills = [
    { name: 'Software Engineering', url: '/swe' },
    { name: 'UI/UX Design', url: '/design' },
    { name: 'Esports Career', url: '/esport' }
  ];
    const [currentSkillIndex, setCurrentSkillIndex] = useState<number>(0);
    const getPrevSkillIndex = () => (currentSkillIndex === 0 ? skills.length - 1 : currentSkillIndex - 1);
    const getNextSkillIndex = () => (currentSkillIndex === skills.length - 1 ? 0 : currentSkillIndex + 1);
    
    const handlePrevSkill = () => {
      setCurrentSkillIndex(getPrevSkillIndex());
    };
  
    const handleNextSkill = () => {
      setCurrentSkillIndex(getNextSkillIndex());
    };
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
      </div>
      <ul className="font-['Cambria'] pr-6 pl-6 mx-auto max-w-6xl p-4 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-white">
        <li>
          <p
            className="animate-fade-down font-semibold mt-6 mb-4 text-lg h-10 leading-8 text-pink-500 mt-0"
          >
            Welcome to my personal website!
          </p>
          <p
            className="animate-fade-down font-semibold mb-10 text-sm h-10 leading-8 text-pink-500 mt-0"
          >
            Click the arrows to explore what positions I'm open to!
          </p>
      <div className="animate-fade-down text-2xl flex items-center justify-between w-full space-x-4 mb-10">
      <button onClick={handlePrevSkill} className="m-4 p-4 font-mono font-bold text-pink-700 hover:text-pink-400 hover:animate-bounce">&lt;</button>
        <div className="flex items-center flex-1 justify-between">
        <span className="fade-in text-sm font-bold text-pink-300 flex-1 text-center whitespace-nowrap">
        <Link to={skills[getPrevSkillIndex()].url}>
            {skills[getPrevSkillIndex()].name}
            </Link>
        </span>
        <span className="flex-1 text-center whitespace-nowrap text-lg">
          <Link to={skills[currentSkillIndex].url}>
            <a className="m-6 p-4 rounded-md text-pink-900 font-bold bg-pink-200 hover:text-pink-400">{skills[currentSkillIndex].name}</a>
          </Link>
        </span>
        <span className="text-sm font-bold text-pink-300 flex-1 text-center whitespace-nowrap">
        <Link to={skills[getNextSkillIndex()].url}>
            {skills[getNextSkillIndex()].name}
            </Link>
        </span>
        </div>
      <button onClick={handleNextSkill} className="m-4 p-4 font-mono font-bold text-pink-700 hover:text-pink-400 hover:animate-bounce">&gt;</button>
      </div>
      </li>
      </ul>
    </div>
  );
}
