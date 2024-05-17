import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects & Experiences     </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/voting.png"
          title="Blockchain voting system"
          description=" A blockchain based voting deployed on  sepolioa ethereum(with alchemy) using react next.js and Docker"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Chainshift website"
          description=" A chainshift company website usig html css js php "
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="space theme portfolio"
          description="personal portfolio made using html,css,js react next.js and three.js with flowermotion ."
        />
         <ProjectCard
          src="/auth.webp"
          title="Blockchain Based Authentication"
          description="An advanced authentication system with blockchain deployed on sepolia ethereum using alchemy ."
        />
      </div>
    </div>
  );
};

export default Projects;