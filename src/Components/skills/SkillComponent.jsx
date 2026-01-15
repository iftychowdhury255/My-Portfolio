import React from "react";
// সরাসরি সব আইকন Si থেকে ইমপোর্ট না করে আমরা Di এবং Tb সেট থেকেও কিছু নেব যা বেশি স্ট্যাবল
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiPhp, SiLaravel, SiMysql, SiGit, SiVite,
  SiAngular, SiJquery, SiDotnet
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb"; 
import { DiMsqlServer } from "react-icons/di"; // SQL Server এর জন্য Di সেট ব্যবহার করা হয়েছে

const skillCategories = [
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "C#", icon: <TbBrandCSharp className="text-purple-600" /> },
      { name: ".NET Core / MVC", icon: <SiDotnet className="text-indigo-600" /> },
      { name: "Entity Framework", icon: <SiDotnet className="text-blue-500" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
    ],
  },
  {
    title: "Database & Frontend",
    skills: [
      { name: "MS SQL Server", icon: <DiMsqlServer className="text-red-600" /> }, // এখানে DiMsqlServer ব্যবহার করা হয়েছে
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "Angular", icon: <SiAngular className="text-red-600" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "jQuery / AJAX", icon: <SiJquery className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Core Web & Tools",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
];

const SkillComponent = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a192f] text-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
            Technical Skills
            <span className="h-[1px] w-24 bg-blue-600"></span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A comprehensive list of my technical stack, specializing in the .NET ecosystem 
            and modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-blue-400 font-mono text-sm mb-6 uppercase tracking-widest font-bold">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#112240] border border-transparent hover:border-blue-500/50 hover:bg-[#1d2d50] transition-all duration-300 group shadow-lg"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillComponent;