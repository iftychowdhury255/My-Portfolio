import React from "react";
import aboutImage from "../assets/Images/about/ifty_portfolio_pic.jpg";
import SkillComponent from "../Components/skills/SkillComponent";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-[#0a192f] text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image Section - Simplified */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Iftekher Chowdhury"
                  className="rounded-2xl shadow-2xl w-72 h-80 object-cover border-4 border-blue-600/20"
                />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600/10 -z-10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Content Section - Minimalist */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                About Me
                <span className="h-[1px] w-32 bg-gray-700"></span>
              </h2>

              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Hello! I'm <span className="text-blue-400 font-semibold">Iftekher Chowdhury</span>, 
                  a Junior Software Engineer with a deep passion for the <span className="text-white">.NET ecosystem</span>. 
                  I enjoy building things that live on the internet, whether that be websites, 
                  applications, or anything in between.
                </p>

                <p>
                  My main focus these days is building accessible, inclusive products and 
                  digital experiences for a variety of clients. I specialize in 
                  <span className="text-white font-medium"> C#, ASP.NET Core, and SQL Server</span>.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">▹</span>
                  <span className="text-sm">Experience: <span className="text-gray-300">3+ Years</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">▹</span>
                  <span className="text-sm">Location: <span className="text-gray-300">Bangladesh</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">▹</span>
                  <span className="text-sm">Expertise: <span className="text-gray-300">Full-Stack Development</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">▹</span>
                  <span className="text-sm">Freelance: <span className="text-gray-300">Available</span></span>
                </div>
              </div>

              {/* CV Button */}
              <div className="mt-10">
                <a
                  href="/Iftekher-Chowdhury-CV.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 border border-blue-500 text-blue-400 font-medium rounded hover:bg-blue-500/10 transition-all duration-300"
                >
                  Download My CV
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SkillComponent />
    </>
  );
};

export default About;