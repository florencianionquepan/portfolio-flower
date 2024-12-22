import { Technology } from "../store/model/Technology"

interface TechnologyItemsProps{
    technology:Technology
}

export const TechnologyDraggable = ({technology}:TechnologyItemsProps) => {

  const handleDragStart = (event: React.DragEvent<HTMLSpanElement>) => {
    // Envía los datos del objeto como JSON
    event.dataTransfer.setData('application/json', JSON.stringify(technology));
  };
  
  return (
    <>
        <span 
        draggable
        onDragStart={ handleDragStart }
        className="inline-flex items-center rounded-md bg-purple-50 
        px-1 pr-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset 
        ring-purple-700 m-1">
          {technology.logoUrl ? 
              (<img 
              src={technology.logoUrl} 
              alt={`${technology.name} logo`} 
              className="w-4 h-4 mr-1" />)
            :(<div className="mr-1 h-4"></div>)}
            {technology.name} | v: {technology.version}
        </span>
    </>
  )
}
