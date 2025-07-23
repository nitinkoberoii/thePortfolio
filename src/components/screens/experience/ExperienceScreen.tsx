import React, { useState, useRef, useEffect } from "react";
import { EXPERIENCES } from "./experienceConstants";
import dotsImg from "../../../assets/images/dots.png";
import rect1 from "../../../assets/images/rect1.png";

const MILESTONE_POSITIONS = [0.1, 0.5, 0.9]; // % along the line for 3 experiences

const SVG_WIDTH = 900;
const SVG_HEIGHT = 120;
const PATH_D = `M 60 ${SVG_HEIGHT/2} L 840 ${SVG_HEIGHT/2}`; // Straight horizontal line

const getPointAtLength = (path: SVGPathElement, t: number) => {
  const total = path.getTotalLength();
  return path.getPointAtLength(total * t);
};

const ExperienceScreen: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [milestonePoints, setMilestonePoints] = useState<{x: number, y: number}[]>([]);
  const [, setAvatarPos] = useState<{x: number, y: number} | null>(null);
  const [, setMouseOnLine] = useState(false);

  // Calculate milestone points after SVG renders
  useEffect(() => {
    if (!pathRef.current) return;
    const points = MILESTONE_POSITIONS.map(t => getPointAtLength(pathRef.current!, t));
    setMilestonePoints(points);
    // Set avatar to first dot by default
    if (points.length > 0) setAvatarPos(points[0]);
  }, [pathRef.current]);

  // Mouse move handler for avatar
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!pathRef.current) return;
    setMouseOnLine(true);
    const rect = (e.target as SVGSVGElement).getBoundingClientRect();
    let x = e.clientX - rect.left;
    // Clamp x to path range
    x = Math.max(60, Math.min(840, x));
    // Project x to t (0 to 1 along the path)
    const t = (x - 60) / (840 - 60);
    const pt = getPointAtLength(pathRef.current, t);
    setAvatarPos({ x: pt.x, y: pt.y });
  };

  const handleMouseLeave = () => {
    setMouseOnLine(false);
    // Return avatar to first dot
    if (milestonePoints.length > 0) setAvatarPos(milestonePoints[0]);
  };

  // When mouse enters a dot, treat as on line
  const handleDotMouseEnter = (idx: number) => {
    setActiveIdx(idx);
    setMouseOnLine(true);
    if (pathRef.current) {
      const pt = getPointAtLength(pathRef.current, MILESTONE_POSITIONS[idx]);
      setAvatarPos({ x: pt.x, y: pt.y });
    }
  };
  const handleDotMouseLeave = () => {
    setActiveIdx(null);
    setMouseOnLine(false);
    if (milestonePoints.length > 0) setAvatarPos(milestonePoints[0]);
  };

  return (
    <section
      id="experience"
      className="relative w-full px-2 md:px-[10vw] py-24 flex flex-col items-center"
      style={{ minHeight: activeIdx !== null ? 420 : 220 }}
    >
      {/* Section Title */}
      <div className="flex items-center mb-12 w-full">
        <span className="font-mono font-bold text-3xl md:text-4xl mr-6 whitespace-nowrap">
          <span className="text-primary">#</span><span className="text-white">experience</span>
        </span>
        <div className="border-t-2 border-primary opacity-40 w-[200px] md:w-[320px] ml-4"></div>
      </div>
      {/* Decorative Dots/Rects */}
      <img src={dotsImg} alt="dots" className="hidden md:block absolute left-0 top-10 w-[80px] z-0 opacity-60" />
      <img src={rect1} alt="rect1" className="hidden md:block absolute right-0 bottom-10 w-[60px] z-0 opacity-60" />
      {/* SVG Road */}
      <div className="relative w-full flex justify-center items-center" style={{ minHeight: SVG_HEIGHT }}>
        <svg
          width={SVG_WIDTH}
          height={SVG_HEIGHT}
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="w-full max-w-4xl h-[120px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Road Path */}
          <path
            ref={pathRef}
            d={PATH_D}
            fill="none"
            stroke="#b983ff"
            strokeWidth={8}
            strokeLinecap="round"
            strokeDasharray="12 10"
            style={{ filter: "drop-shadow(0 2px 8px #b983ff88)" }}
          />
          {/* Milestone Dots */}
          {milestonePoints.length === MILESTONE_POSITIONS.length && milestonePoints.map((pt, idx) => {
            const exp = EXPERIENCES[idx];
            return (
              <g key={idx}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={18}
                  fill="#b983ff"
                  stroke="#fff"
                  strokeWidth={4}
                  className="cursor-pointer"
                  onMouseEnter={() => handleDotMouseEnter(idx)}
                  onMouseLeave={handleDotMouseLeave}
                  onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
                />
                {/* Icon on dot */}
                {exp.icon && (
                  <image
                    href={exp.icon}
                    x={pt.x - 12}
                    y={pt.y - 12}
                    width={24}
                    height={24}
                    style={{ pointerEvents: "none" }}
                  />
                )}
              </g>
            );
          })}
        </svg>
        {/* Milestone Popups */}
        {milestonePoints.length === MILESTONE_POSITIONS.length && milestonePoints.map((pt, idx) => {
          const exp = EXPERIENCES[idx];
          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                left: `calc(${(pt.x / SVG_WIDTH) * 100}% - 120px)` ,
                top: pt.y + 32, // 32px below the center of the dot (dot radius + margin)
                zIndex: 30,
                display: activeIdx === idx ? "block" : "none",
                width: 240,
                pointerEvents: "auto",
                background: "rgba(24, 20, 36, 1)"
              }}
              className="border border-primary rounded-lg shadow-xl p-5 font-mono text-white text-left animate-fade-in select-none relative"
              onMouseLeave={handleDotMouseLeave}
            >
              <div className="flex flex-row items-start mb-1">
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg mb-1 break-words">{exp.title}</div>
                  <div className="text-primary font-semibold mb-1 break-words">{exp.company}</div>
                  <div className="text-xs text-gray mb-2 break-words">{exp.duration}</div>
                </div>
                {exp.icon && (
                  <img src={exp.icon} alt="icon" className="w-14 h-14 ml-2 flex-shrink-0" />
                )}
              </div>
              <div className="text-gray text-sm break-words w-full">{exp.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceScreen; 