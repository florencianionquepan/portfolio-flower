import { useSelector } from 'react-redux';
import { Titles } from '../assets/Titles'
import { AppDispatch, RootState } from '../store/store';
import { ProjectItem } from './ProjectItem';
import { ProjectForm } from './ProjectForm';
import { useDispatch } from 'react-redux';
import { openNewProject } from '../store/project/projectSlice';
import { CreationButton } from '../assets/CreationButton';

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
        <CreationButton
        onClick={handleOpenNewProject}
        disabled={loading || isFormOpen} />
      </div>
      {isFormOpen && 
        <ProjectForm projectToEdit={projectToEdit}/>
      }
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
      
    </div>
  )
}
