import React from 'react';
import heroImage from '../../assets/Images/Hero/original-picture-Ifty.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 bg-[#0a192f] overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left Column: Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="text-blue-400 font-mono text-sm mb-4 block tracking-widest uppercase">
              Junior Software Engineer
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Iftekher Chowdhury</span>
            </h1>
            
            <div className="min-h-[60px]">
                <TypeAnimation
                  sequence={[
                    'Junior Software Engineer in .NET',
                    2000,
                    'Specializing in C# & ASP.NET Core',
                    2000,
                    'Building Scalable Web Applications',
                    2000,
                    'Passionate about Clean Code & MVC',
                    2000
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="text-gray-400 text-lg md:text-xl font-medium"
                />
            </div>

            <p className="text-gray-400 mt-4 mb-8 max-w-lg leading-relaxed">
               Dedicated to building scalable backend systems and efficient APIs with C# and ASP.NET Core, focusing on clean code and optimal performance.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                  href="https://www.linkedin.com/in/iftydev255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:translate-y-[-2px]">
                  Contact Me!
                </button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600/10 transition-all duration-300 hover:translate-y-[-2px]">
                  View Resume
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          {/* Right Column: Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative group">
                {/* Animated Ring Around Image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                {/* কন্টেইনারের সাইজ এবং অবজেক্ট ফিট ফিক্স করা হয়েছে */}
                <div className="relative w-72 h-[400px] md:w-80 md:h-[450px] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={heroImage}
                    alt="Iftekher Chowdhury"
                    className="w-full h-full object-contain bg-[#112240] transition-all duration-500" 
                  />
                </div>
                
                {/* Professional Stats Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl hidden lg:block">
                  <p className="text-blue-400 font-bold text-xl text-center">.NET</p>
                  <p className="text-gray-400 text-xs">Developer</p>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;