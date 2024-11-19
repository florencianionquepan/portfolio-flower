import { ProjectLinks } from "./ProjectLinks";
import { ProjectImage } from "./ProjectImage";
import { Project } from "../store/model/Project";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TechnologyItem } from "../technologies/TechnologyItem";

interface ProjectItemProps{
    project:Project
}

export const ProjectItem = ({project}: ProjectItemProps) => {

  const {technologies} = useSelector( (state: RootState) => state.technology);

  return (
    <div className='flex max-w-2xl flex-col items-start justify-between 
          border rounded border-purple-600 shadow-lg shadow-purple-400 m-2'>

        <div className="mx-auto mx-4">
        <h3 className="my-2 text-lg font-semibold">{project.title}</h3>
        <ProjectImage image={project.images![0].url!} />
        <p className="mt-2">
            {project.description}
        </p>

            {project.links?.map((link)=>(
                <ProjectLinks
                key={link.id} 
                url={link.url}
                label={link.title} />
            ))}

        <div className="py-4">
            <h6 className="font-normal text-gray-900">Technologies</h6>
            {technologies.map((t) => (
            <TechnologyItem key={t.id} technology={t} />
            ))}
        </div>
        </div>

    </div>
    
  );
};
