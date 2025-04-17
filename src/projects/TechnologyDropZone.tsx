import { XCircleIcon } from "@heroicons/react/24/outline";
import { Technology } from "../store/model/Technology";
import { TechnologyDraggable } from "../technologies/TechnologyDraggable";
interface TechnologyDropZoneProps {
  selectedTechnologies: Technology[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Technology[]>>;
  technologiesHasError:boolean
}

export const TechnologyDropZone: React.FC<TechnologyDropZoneProps> = ({
  selectedTechnologies,
  setSelectedTechnologies,
  technologiesHasError
}) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("application/json");
    if (data) {
      const droppedTechnology: Technology = JSON.parse(data);
      if (
        !selectedTechnologies.some(
          (tech) => tech.name === droppedTechnology.name
        )
      ) {
        setSelectedTechnologies((prev) => [...prev, droppedTechnology]);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemoveTechnology = (techToRemove: Technology) => {
    setSelectedTechnologies(
      selectedTechnologies.filter((tech) => tech.id !== techToRemove.id)
    );
  };

  return (
    <div
      className={`block w-full bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${
        technologiesHasError
          ? "border-red-500 focus:ring-red-500"
          : "border-purple-400 focus:ring-1 focus:ring-purple-600"
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver} >
      {selectedTechnologies.length === 0 ? (
        <p className="text-gray-500">Drag and drop technologies here</p>
      ) : (
        selectedTechnologies.map((tech, i) => (
          <div key={tech.id} className="inline">
            <TechnologyDraggable
              key={i} 
              technology={tech}
              />
            <button
              type="button"
              onClick={() => handleRemoveTechnology(tech)}
              className="text-black" >
              <XCircleIcon className="w-4 h-4"></XCircleIcon>
            </button>
          </div>           
          
        ))
      )}
    </div>
  );
};
