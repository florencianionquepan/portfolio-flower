import { useSelector } from 'react-redux';
import { Titles } from '../assets/Titles'
import { PlusIcon } from '@heroicons/react/24/outline'
import { AppDispatch, RootState } from '../store/store';
import { ProjectItem } from './ProjectItem';
import { ProjectForm } from './ProjectForm';
import { useDispatch } from 'react-redux';
import { openNewProject } from '../store/project/projectSlice';

export const ProjectSection = () => {

  const dispatch: AppDispatch = useDispatch();
  const {projects, loading, isFormOpen, projectToEdit} = useSelector( (state: RootState) => state.project)

const handleOpenNewProject = ()=>{
    dispatch( openNewProject() );
}
  return (
    <div className="p-8 xl:px-16" id="projects">
      <div className="flex items-center justify-between mb-4">
        <Titles title="Projects"/>
        <button className="bg-transparent border border-2 border-purple-600 
        rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-1"
        onClick={handleOpenNewProject} 
        disabled= {loading || isFormOpen} >
          <PlusIcon className="h-5 w-5 text-purple-600"></PlusIcon>
        </button>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          
          {projects.map((project)=>(
            <ProjectItem
            key={project.id}
            project={project}
            />
          ))}

        </div>
      </div>
      {isFormOpen && 
        <ProjectForm projectToEdit={projectToEdit}/>
      }
    </div>
  )
}
