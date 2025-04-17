import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { TechnologyDraggable } from '../technologies/TechnologyDraggable';

export const Technologies = () => {

  const {technologies} = useSelector( (state: RootState) => state.technology);


  return (
    <div className="pb-4">
            {technologies.map((t) => (
            <TechnologyDraggable key={t.id} technology={t} />
            ))}
        </div>
  )
}
