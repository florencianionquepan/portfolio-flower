import { Technology } from "../store/model/Technology"
import { TechnologyItem } from "./TechnologyItem";

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
        onDragStart={ handleDragStart }>
        <TechnologyItem technology={technology}/>
        </span>
    </>
  )
}
