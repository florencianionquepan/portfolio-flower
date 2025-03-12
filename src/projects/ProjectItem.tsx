import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { ProjectLinks } from "./ProjectLinks";
import { Project } from "../store/model/Project";
import { TechnologyItem } from "../technologies/TechnologyItem";
import { CarouselImages } from "./CarouselImages";
import { openProjectToEdit } from "../store/project/projectSlice";
import { PencilIcon } from "@heroicons/react/24/outline";

interface ProjectItemProps{
    project:Project
}

export const ProjectItem = ({project}: ProjectItemProps) => {

  const dispatch: AppDispatch = useDispatch();
  const {loading, isFormOpen } = useSelector( (state: RootState) => state.project)

  const onEdit =() =>{
    dispatch(openProjectToEdit(project));
  }

  return (
    <div className='flex max-w-2xl flex-col items-start justify-between 
          border rounded border-purple-600 shadow-lg shadow-purple-400 m-2 '>

        <div className="mx-auto">
          <div className="flex items-center justify-between w-full px-2 mb-2">
            <h3 className="my-2 text-lg font-semibold px-2">{project.title}</h3>
              <button 
              className="bg-transparent border border-2 border-purple-600 
                          rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-2"
                          disabled={loading || isFormOpen}
                          onClick={() => onEdit()} 
              aria-label={`Edit ${project.title}`} >
              <PencilIcon className="h-3 w-3 text-purple-600"></PencilIcon>
              </button>
          </div>
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
