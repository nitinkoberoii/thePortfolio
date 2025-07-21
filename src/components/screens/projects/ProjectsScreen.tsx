import React, { useEffect } from "react";
import { PROJECTS } from "./projectsConstant";
import type { Project } from "./projectsConstant";


const ProjectsScreen: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Group projects by category
  const categories = ["complete-apps", "small-projects", "AI/ML"];

  return (
    <div className="w-full bg-background text-white min-h-screen px-8 md:px-[10vw] py-12">
      <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8">
        <span className="text-primary">/</span>
        <span className="text-white">projects</span>
      </h1>
      <p className="text-gray font-mono text-lg mb-12">List of my projects</p>
      {categories.map((cat) => {
        const projects = PROJECTS.filter((p) => p.category === cat);
        if (!projects.length) return null;
        return (
          <section key={cat} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              <span className="text-primary">#</span>
              <span className="text-white">{cat}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project: Project) => (
                <div key={project.title} className="border border-gray bg-background/80 rounded-none flex flex-col shadow-md transition-transform hover:-translate-y-2 group">
                  {/* Project Image (only if present) */}
                  {project.image && (
                    <div className="w-full h-[180px] bg-black flex items-center justify-center border-b border-gray overflow-hidden">
                      <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-gray border-b border-gray px-4 py-2">
                    {project.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {/* Title & Description */}
                  <div className="flex-1 px-4 py-4 flex flex-col">
                    <span className="font-mono text-2xl font-bold mb-2 text-white">{project.title}</span>
                    <span className="font-mono text-gray text-base mb-4">{project.description}</span>
                    <div className="mt-auto flex gap-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border border-primary text-primary font-mono px-4 py-2 text-base hover:bg-primary hover:text-background transition-colors">
                          Live <span className="inline-block ml-1">⇔</span>
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-gray text-gray font-mono px-4 py-2 text-base hover:bg-gray hover:text-background transition-colors">
                        Github <span className="inline-block ml-1">&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectsScreen; 