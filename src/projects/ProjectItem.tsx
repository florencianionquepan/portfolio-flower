import { ProjectLinks } from "./ProjectLinks";
import { Project } from "../store/model/Project";
import React from "react";
import { TechnologyItem } from "../technologies/TechnologyItem";
import { CarouselImages } from "./CarouselImages";

interface ProjectItemProps{
    project:Project
}

export const ProjectItem = ({project}: ProjectItemProps) => {

  return (
    <div className='flex max-w-2xl flex-col items-start justify-between 
          border rounded border-purple-600 shadow-lg shadow-purple-400 m-2 '>

        <div className="mx-auto">
          <h3 className="my-2 text-lg font-semibold px-2">{project.title}</h3>
          <CarouselImages 
            images={project.images}/>
          <p className="mt-2 px-1">
              {project.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2 px-2">
            {project.links?.map((link, index) => (
              <React.Fragment key={link.id}>
                {index > 0 && <span className="mx-1"> | </span>}
                <ProjectLinks url={link.url} label={link.title} />
              </React.Fragment>
            ))}
          </div>

        </div>

        <div className="m-2">
            <h6 className="text-black font-normal">Technologies</h6>
            {project.technologies?.map((tech)=>(
              <TechnologyItem
              key={tech.id}
              technology={tech}
              />
            ))}
        </div>

    </div>
    
  );
};
