import { Technology } from "../store/model/Technology"

interface TechnologyItemsProps{
    technology:Technology
}

export const TechnologyItem = ({technology}:TechnologyItemsProps) => {
  return (
    <>
        <span className="inline-flex items-center rounded-md bg-purple-50 
        px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset 
        ring-purple-700/10">
            {technology.name} | v: {technology.version}
        </span>
    </>
  )
}
