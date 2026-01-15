import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f] border-t border-gray-800 pt-16 pb-8 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter">
              IFTEKHER<span className="text-blue-500">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Junior Software Engineer specializing in the .NET ecosystem. 
              Focused on building scalable backend systems and high-quality web applications.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="https://github.com/iftychowdhury255" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-all text-xl">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/iftydev255" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-all text-xl">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com/ifty_dev_255" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-all text-xl">
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-blue-400 cursor-pointer text-sm transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-blue-500 group-hover:w-4 transition-all"></span>
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FiMail className="text-blue-500" />
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">iftychowdhury10212089@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FiPhone className="text-blue-500" />
                <span>+880 187-4679300</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FiMapPin className="text-blue-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Iftekher Chowdhury. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1 font-mono">
            Designed with <span className="text-blue-400">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;