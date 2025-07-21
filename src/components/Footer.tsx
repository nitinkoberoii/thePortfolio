import React from "react";
import GithubIcon from "../assets/images/Github.png";
import InstagramIcon from "../assets/images/Instagram.png";
import LinkedinIcon from "../assets/images/Linkedin.png";
import TwitterIcon from "../assets/images/twitter.png";
import DiscordIcon from "../assets/images/discord.png";
import EmailIcon from "../assets/images/email.png";
import unionLogo from "../assets/images/union.png";
import { USER_NAME, HERO_HEADING_HIGHLIGHT_1, HERO_HEADING_HIGHLIGHT_2, SOCIAL_LINKS } from "./constants";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background text-white border-t border-gray">
      <div className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-8 md:px-[10vw]">
          {/* Left: Logo, name, email and description */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                  <img src={unionLogo} alt="Logo" className="w-8 h-8" />
                </a>
                <span className="text-white font-bold text-2xl tracking-wide font-mono">{USER_NAME}</span>
              </div>
            </div>
            <span className="text-gray font-mono text-lg">
              {HERO_HEADING_HIGHLIGHT_1} and {HERO_HEADING_HIGHLIGHT_2}
            </span>
          </div>

          {/* Right: Media */}
          <div className="flex flex-col items-end">
            <span className="text-white font-mono text-lg font-bold mb-4">Media</span>
            <div className="grid grid-cols-3 gap-4">
              {/* Row 1 */}
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
                <img src={GithubIcon} alt="Github" className="w-8 h-8" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={InstagramIcon} alt="Instagram" className="w-7 h-7" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                <img src={LinkedinIcon} alt="Linkedin" className="w-7 h-7" />
              </a>
              {/* Row 2 */}
              <a href={`mailto:${SOCIAL_LINKS.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <img src={EmailIcon} alt="Email" className="w-7 h-7" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={TwitterIcon} alt="Twitter" className="w-7 h-7" />
              </a>
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <img src={DiscordIcon} alt="Discord" className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright - New row below everything */}
        <div className="text-center mt-8 px-8 md:px-[10vw]">
          <span className="text-gray font-mono text-base">© No Copyright 2025. Made by {USER_NAME}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 