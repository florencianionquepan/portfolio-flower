import { Technology } from "../store/model/Technology";
import { TechnologyItem } from "../technologies/TechnologyItem";

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
        setSelectedTechnologies([...selectedTechnologies, droppedTechnology]);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={`block w-full bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${
        technologiesHasError
          ? "border-red-500 focus:ring-red-500"
          : "border-purple-400 focus:ring-1 focus:ring-purple-600"
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selectedTechnologies.length === 0 ? (
        <p className="text-gray-500">Drag and drop technologies here</p>
      ) : (
        selectedTechnologies.map((tech, i) => (
          <TechnologyItem key={i} technology={tech} />
        ))
      )}
    </div>
  );
};
