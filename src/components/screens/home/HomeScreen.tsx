import React from "react";
import profileImg from "../../../assets/images/profile3.png";
import profileAbout from "../../../assets/images/profile.png";
import unionOutlined from "../../../assets/images/union_outlined.png";
import dots from "../../../assets/images/dots.png";
import rect1 from "../../../assets/images/rect1.png";
import rect2 from "../../../assets/images/rect2.png";
import rect3 from "../../../assets/images/rect3.png";
import rect4 from "../../../assets/images/rect4.png";
import phone from "../../../assets/images/phone.png";
import email from "../../../assets/images/email.png";
import quoteImg from "../../../assets/images/quote.png";
import downloadIcon from "../../../assets/images/download.png";
import { Link } from "react-router-dom";
import {
  HERO_HEADING_HIGHLIGHT_1,
  HERO_HEADING_HIGHLIGHT_2,
  HERO_DESCRIPTION,
  HERO_BUTTON_TEXT,
  USER_NAME,
  SKILLS
} from "../../constants";
import { ABOUT_SECTION } from "../about-me/aboutConstants";
import { PROJECTS } from "../projects/projectsConstant";
import type { Project } from "../projects/projectsConstant";
import { CONTACTS_SECTION } from "../contacts/contactsConstants";
import ExperienceScreen from "../experience/ExperienceScreen";

const HomeScreen: React.FC = () => {
  return (
    <div className="w-full bg-background text-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex flex-col justify-center pt-20 pb-16 px-8 md:flex-row md:items-center md:justify-between md:pt-0 md:pb-0 md:px-[5vw]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-mono font-bold leading-tight mb-4">
            {USER_NAME} is a <span className="text-primary">{HERO_HEADING_HIGHLIGHT_1}</span> and <br />
            <span className="text-primary">{HERO_HEADING_HIGHLIGHT_2}</span>
          </h1>
          <p className="text-gray text-base md:text-lg mb-8 font-mono">
            {HERO_DESCRIPTION}
          </p>
          <div className="flex gap-4">
            <button
              className="border border-primary text-white px-6 py-2 font-mono rounded-none hover:bg-primary hover:text-background transition-colors w-fit"
              onClick={() => {
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {HERO_BUTTON_TEXT}
            </button>
            <a
              href="/Resume.pdf"
              download
              className="border border-primary text-white px-6 py-2 font-mono rounded-none hover:bg-primary hover:text-background transition-colors w-fit flex items-center gap-2"
            >
              <img src={downloadIcon} alt="Download" className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Image and Design Elements */}
        <div className="flex-1 relative flex items-center justify-center mt-12 md:mt-0 min-w-[280px] md:min-w-[320px] min-h-[350px] md:min-h-[400px]">
          {/* Outlined Union Design (behind) */}
          <img
            src={unionOutlined}
            alt="Union Outlined"
            className="absolute left-[28%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[60px] md:w-[180px] opacity-80 pointer-events-none select-none z-0"
          />
          {/* Profile Image with Hover Zoom */}
          <img
            src={profileImg}
            alt="Profile"
            className="relative z-10 w-[280px] md:w-[470px] rounded-b-xl object-cover object-top shadow-lg -mt-8 md:-mt-12 transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
            style={{ clipPath: 'inset(0 0 0 0 round 0 0 32px 32px)' }}
          />
          {/* Dots Overlay (front) */}
          <img
            src={dots}
            alt="Dots"
            className="absolute right-[60px] md:right-[100px] bottom-8 md:bottom-12 w-[60px] md:w-[100px] z-20 pointer-events-none select-none"
          />
          {/* Currently working on Portfolio label */}
          <div className="absolute left-[45%] bottom-0 -translate-x-1/2 translate-y-1/2 bg-background border border-gray px-3 md:px-4 py-2 flex items-center gap-2 z-30 text-xs md:text-sm font-mono w-[280px] md:w-[410px] justify-center">
            <span className="w-2 md:w-3 h-2 md:h-3 bg-primary inline-block rounded-sm mr-2"></span>
            Currently working on <span className="font-bold">Portfolio</span>
          </div>
        </div>

        {/* Rectangle on the complete right */}
        <img
          src={rect1}
          alt="Rectangle Design"
          className="hidden md:block absolute right-0 bottom-24 w-[50px] z-30"
        />
      </section>

      {/* Quote Section - Now properly positioned below hero */}
      <section className="w-full flex justify-center items-center py-6 md:py-8 px-4 md:px-8">
        <div className="relative">
          <img src={quoteImg} alt="Quote" className="w-[350px] md:w-[650px] max-w-[90vw]" />
        </div>
      </section>

      {/* Space below quote, matching space above */}
      <div className="h-[40px] md:h-[20px]"></div>

      {/* Experience Section */}
      <ExperienceScreen />

      {/* Space below experience */}
      <div className="h-[60px] md:h-[40px]"></div>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        {/* Projects Section Title */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-8 md:px-[10vw] mb-8 gap-4 md:gap-0">
          <div className="flex items-center">
            <span className="font-mono font-bold text-3xl md:text-4xl mr-6 whitespace-nowrap">
              <span className="text-primary">#</span><span className="text-white">projects</span>
            </span>
            <div className="border-t-2 border-primary opacity-40 w-[200px] md:w-[540px]"></div>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-white font-mono text-base md:text-lg hover:text-primary transition-colors cursor-pointer select-none"
          >
            View all
            <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8H34" stroke="currentColor" strokeWidth="2" />
              <path d="M28 2L34 8L28 14" stroke="currentColor" strokeWidth="2" />
            </svg>
          </Link>
        </div>

        <div className="h-[40px]"></div>

        {/* Projects Grid */}
        <div className="relative w-full px-8 md:px-[10vw] pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project: Project) => (
              <div key={project.title} className="border border-gray hover:border-primary bg-background/80 rounded-none flex flex-col h-full min-h-[380px] shadow-md transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-full h-[180px] bg-black flex items-center justify-center border-b border-gray group-hover:border-primary/50 transition-colors overflow-hidden">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-gray border-b border-gray group-hover:border-primary/50 transition-colors px-4 py-2">
                  {project.techStack.map((tech: string) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="flex-1 px-4 py-4 flex flex-col">
                  <span className="font-mono text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</span>
                  <span className="font-mono text-gray text-base mb-4">{project.description}</span>
                  <div className="mt-auto flex gap-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border border-primary text-primary font-mono px-4 py-2 text-base hover:bg-primary hover:text-background transition-colors">
                        Live <span className="inline-block ml-1">⇔</span>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-gray group-hover:border-primary/70 text-gray group-hover:text-white font-mono px-4 py-2 text-base hover:bg-gray hover:text-background transition-colors">
                      Github <span className="inline-block ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src={rect2}
            alt="Rectangle Design 2"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[50px] z-30"
          />
          <img
            src={dots}
            alt="Rectangle Design 2"
            className="hidden md:block absolute left-[-90px] top-[20%] -translate-y-1/2 w-[80px] z-30"
          />
        </div>
      </section>

      {/* Space below projects */}
      <div className="h-[80px] md:h-[40px]"></div>

      {/* Skills Section */}
      <section id="skills" className="relative w-full">
        {/* Skills Section Title */}
        <div className="relative w-full px-8 md:px-[10vw] mb-8 flex items-center">
          <span className="font-mono font-bold text-3xl md:text-4xl mr-6 whitespace-nowrap">
            <span className="text-primary">#</span><span className="text-white">skills</span>
          </span>
          <div className="border-t-2 border-primary opacity-40 w-[200px] md:w-[320px] ml-4"></div>
        </div>

        {/* Skills Content */}
        <div className="relative w-full px-8 md:px-[10vw] min-h-[400px] flex items-start">
          <img
            src={dots}
            alt="dots"
            className="hidden md:block absolute left-[185px] top-[30px] w-[80px] z-10"
          />
          <img
            src={rect3}
            alt="rect3"
            className="hidden md:block absolute left-[480px] top-[0px] w-[80px] z-10"
          />
          <img
            src={dots}
            alt="dots"
            className="hidden md:block absolute left-[420px] top-[140px] w-[80px] z-10"
          />
          <img
            src={unionOutlined}
            alt="Union Outlined"
            className="hidden md:block absolute left-[230px] top-[200px] w-[130px] z-10"
          />
          <img
            src={rect3}
            alt="rect3"
            className="hidden md:block absolute left-[550px] top-[180px] w-[50px] z-10"
          />
          <div className="w-full md:ml-[500px] z-20">
            <div className="md:hidden grid grid-cols-1 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.category} className="border border-gray px-6 py-4">
                  <span className="font-mono font-bold text-lg text-white mb-2 block">{skill.category}</span>
                  <div className="border-t border-gray my-2 -mx-6"></div>
                  <div className="font-mono text-gray text-base flex flex-wrap gap-x-3 gap-y-1">
                    {skill.items.map((item: string) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:flex flex-wrap gap-5 max-w-[720px]">
              {SKILLS.map((skill) => (
                <div key={skill.category} className="border border-gray px-6 py-4 flex-1 min-w-[200px] max-w-[220px]">
                  <span className="font-mono font-bold text-lg text-white mb-2 block">{skill.category}</span>
                  <div className="border-t border-gray my-2 -mx-6"></div>
                  <div className="font-mono text-gray text-base flex flex-wrap gap-x-3 gap-y-1">
                    {skill.items.map((item: string) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Space below skills */}
      <div className="h-[80px] md:h-[40px]"></div>

      {/* About Me Section */}
      <section id="about-me" className="relative w-full">
        {/* About Me Section Title */}
        <div className="relative w-full px-8 md:px-[10vw] mb-8 flex items-center">
          <span className="font-mono font-bold text-3xl md:text-4xl mr-6 whitespace-nowrap">
            <span className="text-primary">#</span><span className="text-white">about-me</span>
          </span>
          <div className="border-t-2 border-primary opacity-40 w-[200px] md:w-[320px] ml-4"></div>
        </div>

        {/* About Me Content */}
        <div className="relative w-full px-8 md:px-[10vw] min-h-[200px] flex flex-col md:flex-row items-center gap-8">
          <img
            src={rect4}
            alt="rect4"
            className="hidden md:block absolute left-[-60px] top-[60px] w-[60px] z-10"
          />
          <img
            src={dots}
            alt="dots-right"
            className="hidden md:block absolute right-0 bottom-[40px] w-[100px] z-10"
          />
          <div className="flex-1 max-w-xl z-20 order-2 md:order-1">
            <div className="text-gray font-mono text-lg mb-6">{ABOUT_SECTION.greeting}</div>
            <div className="text-gray font-mono text-base mb-6" style={{ whiteSpace: 'pre-line' }}>{ABOUT_SECTION.intro}</div>
            {ABOUT_SECTION.education && (
              <div className="text-gray font-mono text-base mb-8" style={{ whiteSpace: 'pre-line' }}>{ABOUT_SECTION.education}</div>
            )}
            <div className="text-gray font-mono text-base mb-6" style={{ whiteSpace: 'pre-line' }}>{ABOUT_SECTION.description}</div>
          </div>
          <div className="flex-1 flex items-center justify-center relative min-w-[280px] md:min-w-[320px] min-h-[350px] md:min-h-[400px] order-1 md:order-2">
            <img
              src={dots}
              alt="dots-overlay-1"
              className="absolute left-[140px] top-[40px] w-[80px] z-10"
            />
            <img
              src={dots}
              alt="dots-overlay-2"
              className="absolute right-[100px] bottom-[150px] w-[80px] z-20"
            />
            <img
              src={profileAbout}
              alt="Profile About"
              className="relative z-10 w-[280px] md:w-[350px] h-[400px] md:h-[500px] object-cover object-top rounded-b-xl shadow-lg"
              style={{ clipPath: 'inset(0 0 0 0 round 0 0 32px 32px)' }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[0px] w-[280px] md:w-[350px] border-t-2 border-primary"
              style={{ zIndex: 15 }}
            ></div>
          </div>
        </div>
      </section>

      {/* Space below about-me */}
      <div className="h-[80px] md:h-[80px]"></div>

      {/* Contacts Section */}
      <section id="contacts" className="relative w-full pb-16">
        {/* Contacts Section Title */}
        <div className="relative w-full px-8 md:px-[10vw] mb-8 flex items-center">
          <span className="font-mono font-bold text-3xl md:text-4xl mr-6 whitespace-nowrap">
            <span className="text-primary">#</span><span className="text-white">contacts</span>
          </span>
          <div className="border-t-2 border-primary opacity-40 w-[200px] md:w-[320px] ml-4"></div>
        </div>

        {/* Contacts Content */}
        <div className="relative w-full px-8 md:px-[10vw] min-h-[300px] flex flex-col md:flex-row items-center gap-8">
          <img
            src={dots}
            alt="dots-far-left"
            className="hidden md:block absolute left-[-90px] top-[40px] w-[80px] z-10"
          />
          <div className="flex-1 max-w-xl z-20 order-2 md:order-1">
            <div className="text-gray font-mono text-base mb-8" style={{ whiteSpace: 'pre-line' }}>{CONTACTS_SECTION.description}</div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end z-20 order-1 md:order-2">
            <div className="border border-gray px-6 md:px-8 py-6 w-full max-w-[340px] bg-background/80">
              <div className="font-mono text-white text-xl font-bold mb-4">{CONTACTS_SECTION.messageLabel}</div>
              <div className="flex items-center gap-3 text-gray font-mono text-lg mb-3 hover:text-white transition-colors group">
                <img src={phone} alt="Phone" className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all" />
                {CONTACTS_SECTION.phone}
              </div>
              <div className="flex items-center gap-3 text-gray font-mono text-lg hover:text-white transition-colors group">
                <img src={email} alt="Email" className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all" />
                {CONTACTS_SECTION.email}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen; 