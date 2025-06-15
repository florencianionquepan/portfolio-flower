import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { ProjectLinks } from "./ProjectLinks";
import { Project } from "../store/model/Project";
import { TechnologyItem } from "../technologies/TechnologyItem";
import { CarouselImages } from "./CarouselImages";
import { openProjectToEdit } from "../store/project/projectSlice";
import { EditionButton } from "../assets/EditionButton";
import { statusArray } from "../store/model/Status";

interface ProjectItemProps{
    project:Project
}

export const ProjectItem = ({project}: ProjectItemProps) => {

  const dispatch: AppDispatch = useDispatch();
  const {loading, isFormOpen } = useSelector( (state: RootState) => state.project)

  const onEdit =() =>{
    dispatch(openProjectToEdit(project));
  }

  const readableStatus = statusArray.find(s => s.key === project.status)?.value || project.status;


  return (
    <div className='flex max-w-2xl flex-col items-start justify-between 
          border rounded border-purple-600 shadow-lg shadow-purple-400 m-2'>

        <div className="mx-auto flex flex-col w-full h-full">
          
          <div className="flex items-center justify-between w-full px-2 mb-2">
              <h3 className="my-2 text-lg font-semibold px-2">{project.title}</h3>
              <EditionButton
                onClick={()=>onEdit()}
                disabled={loading || isFormOpen}
                label={`Edit ${project.title}`}
                />
          </div>

          <CarouselImages images={project.images}/>
          
          <div className="px-2 mt-2">
            <h6 className="text-gray-800 font-normal mx-2 mt-2">Estado: <span>{readableStatus}</span></h6>
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

            <div className="mx-2 my-auto py-2">
              <h6 className="text-black font-normal">Technologies</h6>
              {project.technologies?.map((tech)=>(
                <TechnologyItem
                key={tech.id}
                technology={tech}
                />
              ))}
            </div>

        </div>
    </div>
    
  );
};
