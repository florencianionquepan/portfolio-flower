import { useSelector } from 'react-redux';
import { Titles } from '../assets/Titles'
import { PlusIcon } from '@heroicons/react/24/outline'
import { RootState } from '../store/store';
import { TechnologyItem } from '../technologies/TechnologyItem';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';
import { ProjectItem } from './ProjectItem';

export const ProjectSection = () => {

  const {technologies} = useSelector( (state: RootState) => state.technology);
  const {projects, loading, isFormOpen, projectToEdit} = useSelector( (state: RootState) => state.project)

const handleOpenNewProject = ()=>{
    
}
  return (
    <div className="p-8 xl:px-16">
      <div className="flex items-center justify-between mb-4">
        <Titles title="Projects"/>
        <button className="bg-transparent border border-2 border-purple-600 
        rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-1"
        onClick={handleOpenNewProject} >
          <PlusIcon className="h-5 w-5 text-purple-600"></PlusIcon>
        </button>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          
          {projects.map((project)=>(
            <ProjectItem
            project={project}
            />
          ))}

        </div>
      </div>
    </div>
  )
}
