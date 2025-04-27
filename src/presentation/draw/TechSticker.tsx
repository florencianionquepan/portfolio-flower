import { Technology } from "../../store/model/Technology"


interface TechnologyItemsProps{
    technology:Technology
}

export const TechSticker = ({technology}:TechnologyItemsProps) => {
    if (!technology.logoUrl) {
        return null; 
    }

  return (
    <span className="inline-flex items-center justify-center border
    border-gray-700 border-rounded rounded aspect-[1/1]">
        {technology.logoUrl ? 
              (<img 
              src={technology.logoUrl} 
              alt={`${technology.name} logo`} 
              className="w-[95%] h-[95%] object-contain"/>)
            :""}
    </span>
  )
}
