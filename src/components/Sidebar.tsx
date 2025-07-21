import React from "react";
import GithubIcon from "../assets/images/Github.png";
import LinkedinIcon from "../assets/images/Linkedin.png";
import TwitterIcon from "../assets/images/twitter.png";
import { SOCIAL_LINKS } from "./constants";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex fixed top-0 left-0 w-16 z-50 flex-col items-center justify-start bg-background pointer-events-none">
      {/* Vertical line */}
      <div className="absolute left-[30px] top-0 w-px bg-gray" style={{ height: '250px', zIndex: 1 }} />
      {/* Social icons container */}
      <div className="relative flex flex-col items-center gap-5 mt-[275px] pointer-events-auto" style={{ zIndex: 2 }}>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
          <img src={GithubIcon} alt="Github" className="w-9 h-9" />
        </a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src={TwitterIcon} alt="Twitter" className="w-7 h-7" />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
          <img src={LinkedinIcon} alt="Linkedin" className="w-7 h-7" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar; 