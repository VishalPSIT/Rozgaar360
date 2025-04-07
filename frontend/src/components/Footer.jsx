import React from "react";
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Rozgaar360</h2>
          <p className="mt-2 text-gray-400">
            From Campus to Corporate — One Stop Solution for Students of All Branches 🚀
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Explore</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Branch Support */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">For Every Branch</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>IT / CSE / ECE</li>
            <li>Mechanical</li>
            <li>Electrical</li>
            <li>Civil & More</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Connect</h3>
          <div className="flex items-center space-x-4 mt-4">
            <a href="https://t.me/campustocorporate_official" target="_blank" rel="noreferrer">
              <FaTelegram className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/__vishal_gautam___" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="https://github.com/VishalPSIT" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/vishal0115/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Rozgaar360 • Made with ❤️ by Vishal Kumar Gautam
      </div>
    </footer>
  );
};

export default Footer;
