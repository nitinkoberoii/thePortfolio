import React, { useState } from "react";
import { EXPERIENCES } from "./experienceConstants";
import dotsImg from "../../../assets/images/dots.png";
import rect1 from "../../../assets/images/rect1.png";

const getInitials = (company: string) => {
  return company
    .replace(/[^a-zA-Z\s]/g, "")
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .substring(0, 3)
    .toUpperCase();
};

const ExperienceCard: React.FC<{ exp: (typeof EXPERIENCES)[0] }> = ({ exp }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="border border-gray bg-background/90 p-6 md:p-8 hover:border-primary transition-all duration-300 shadow-lg relative">
      {/* Header Layout: Left info, Right big square icon box */}
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-4 mb-6 pb-4 border-b border-gray/30">
        {/* Left Side: Title, Company, Duration */}
        <div className="flex-1 min-w-0">
          <h3 className="font-mono font-bold text-xl md:text-2xl text-white group-hover:text-primary transition-colors break-words">
            {exp.title}
          </h3>
          <div className="font-mono text-primary font-semibold text-base md:text-lg mt-1.5">
            {exp.company}
          </div>
          <div className="mt-3 border border-primary text-primary px-3 py-1 font-mono text-xs md:text-sm bg-primary/10 w-fit">
            {exp.duration}
          </div>
        </div>

        {/* Right Side: Big Square Company Logo / Initials Container */}
        <div className="w-16 h-16 md:w-20 md:h-20 border border-primary/40 bg-background/80 p-2 flex items-center justify-center shrink-0 shadow-md group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(199,120,221,0.25)] transition-all">
          {exp.icon && !imgError ? (
            <img
              src={exp.icon}
              alt={exp.company}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-mono font-bold text-primary text-lg md:text-xl tracking-wider select-none">
              {getInitials(exp.company)}
            </span>
          )}
        </div>
      </div>

      {/* Description / Highlights - Every single bullet point */}
      <div className="font-mono text-gray text-sm md:text-base space-y-3 mb-6">
        {exp.highlights && exp.highlights.length > 0 ? (
          exp.highlights.map((item, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2.5">
              <span className="text-primary font-bold select-none mt-0.5">&gt;</span>
              <span className="leading-relaxed text-gray-200">{item}</span>
            </div>
          ))
        ) : (
          <p className="leading-relaxed">{exp.description}</p>
        )}
      </div>

      {/* Tech Stack Tags */}
      {exp.techStack && exp.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray/20">
          {exp.techStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="font-mono text-xs text-gray-300 border border-gray/40 px-2.5 py-1 bg-background/60 hover:border-primary/50 transition-colors"
            >
              #{tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ExperienceScreen: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full px-8 md:px-[10vw] py-16 flex flex-col"
    >
      {/* Section Title */}
      <div className="flex items-center mb-12 w-full">
        <span className="font-mono font-bold text-3xl md:text-4xl mr-6 whitespace-nowrap">
          <span className="text-primary">#</span>
          <span className="text-white">experience</span>
        </span>
        <div className="border-t-2 border-primary opacity-40 w-[200px] md:w-[400px]"></div>
      </div>

      {/* Decorative Dots/Rects */}
      <img
        src={dotsImg}
        alt="dots"
        className="hidden md:block absolute right-4 top-24 w-[80px] z-0 opacity-40 pointer-events-none select-none"
      />
      <img
        src={rect1}
        alt="rect1"
        className="hidden md:block absolute left-[-20px] bottom-16 w-[50px] z-0 opacity-40 pointer-events-none select-none"
      />

      {/* Vertical Timeline Container */}
      <div className="relative border-l-2 border-primary/40 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10 z-10">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-7 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_#c778dd] group-hover:scale-125 transition-transform duration-300"></div>

            {/* Experience Card Component */}
            <ExperienceCard exp={exp} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceScreen;