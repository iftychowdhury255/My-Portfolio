import React from 'react';
// স্ট্যাবল আইকন সেটগুলো ব্যবহার করা হয়েছে
import { 
  SiDotnet, 
  SiAngular, 
  SiHtml5, 
  SiJavascript, 
  SiCss3,
  SiMysql // SQL Server এর বিকল্প হিসেবে এটি রাখা হয়েছে যদি ইমপোর্টে সমস্যা হয়
} from "react-icons/si";
import { TbCertificate, TbBrandCSharp, TbDatabase } from "react-icons/tb"; 
import { DiDatabase } from "react-icons/di"; // ডাটাবেসের জন্য সবচেয়ে কমন আইকন

const ProfessionalCourse = () => {
  const courseSkills = [
    { name: "C# 10 & .NET 6", icon: <TbBrandCSharp className="text-purple-500" /> },
    { name: "ASP.NET Core / MVC 5", icon: <SiDotnet className="text-blue-500" /> },
    { name: "MS SQL Server 2019", icon: <DiDatabase className="text-red-500" /> }, // স্ট্যাবল ডাটাবেস আইকন
    { name: "Angular", icon: <SiAngular className="text-red-600" /> },
    { name: "Web APIs", icon: <SiDotnet className="text-indigo-400" /> },
    { name: "Frontend Stack", icon: <SiHtml5 className="text-orange-500" /> },
  ];

  return (
    <section id="certification" className="py-20 bg-[#0a192f] text-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
            Professional Training
            <span className="h-[1px] w-24 bg-blue-600"></span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-[#112240] rounded-2xl p-8 lg:p-12 border border-blue-500/10 shadow-2xl relative overflow-hidden group">
          {/* Background Decoration */}
          <TbCertificate className="absolute -right-8 -bottom-8 text-blue-500/5 text-9xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1 text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-mono mb-4">
                July 2025 — January 2026
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                Web Application Development Using ASP.NET
              </h3>
              
              <p className="text-blue-400 text-lg font-medium mb-6">
                ISDB-BISEW IT Scholarship Programme
              </p>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                I was awarded the prestigious <span className="text-white font-semibold">ISDB-BISEW IT Scholarship</span>, where I completed a 
                comprehensive <span className="text-white font-semibold">460-hour intensive training</span> on enterprise web application 
                design and architecture.
              </p>

              {/* Module Timeline Style */}
              <div className="space-y-4 border-l-2 border-blue-600/30 pl-6 mb-8">
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600"></span>
                    <p className="text-sm font-semibold text-white">Advanced Programming with C# & .NET 6</p>
                    <p className="text-xs text-gray-500">100 Hours of intensive coding and logic building</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600"></span>
                    <p className="text-sm font-semibold text-white">Database Design & MS SQL Server 2019</p>
                    <p className="text-xs text-gray-400">60 Hours of relational database architecture</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600"></span>
                    <p className="text-sm font-semibold text-white">ASP.NET Core Web Applications & APIs</p>
                    <p className="text-xs text-gray-400">140 Hours of MVC & RESTful API development</p>
                </div>
              </div>
            </div>

            {/* Side Competencies */}
            <div className="w-full lg:w-72">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-700 pb-2">
                Core Stack
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {courseSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-[#0a192f] p-3 rounded-lg border border-white/5 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-[11px] font-medium text-gray-300 uppercase tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCourse;