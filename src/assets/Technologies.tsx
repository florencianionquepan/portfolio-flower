import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { TechnologyItem } from '../technologies/TechnologyItem';

export const Technologies = () => {

  const {technologies} = useSelector( (state: RootState) => state.technology);


  return (
    <div className="pb-4">
            {technologies.map((t) => (
            <TechnologyItem key={t.id} technology={t} />
            ))}
        </div>
  )
}
