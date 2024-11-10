import { Titles } from '../assets/Titles'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { showTechnologies } from '../store/technology/thunk';
import { TechnologyItem } from './TechnologyItem';

export const TechnologySection = () => {

    const dispatch = useAppDispatch();
    const {technologies} = useSelector( (state: RootState) => state.technology);

    useEffect(() => {
      dispatch(showTechnologies());

    }, [dispatch])
    

    const handleOpenNewTechnology = ()=>{
    
    }
      return (
        <div className="p-8 xl:px-16">
          <div className="flex items-center justify-between mb-4">
            <Titles title="Technologies"/>
            <button className="bg-transparent border border-2 border-purple-600 
            rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-1"
            onClick={handleOpenNewTechnology} >
              <PlusIcon className="h-5 w-5 text-purple-600"></PlusIcon>
            </button>
          </div>
          <div>
            { technologies.map((t)=>(
              <TechnologyItem
              key={t.id}
              technology={t}
              />
            ))}
          </div>
        </div>
      )
}
