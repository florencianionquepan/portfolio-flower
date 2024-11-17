interface ProjectImageProps {
    image: string;
  }

export const ProjectImage: React.FC<ProjectImageProps> = ({image}) => {
  return (
    <div className="max-h-[300px] overflow-y-auto border border-8 rounded border-gray-800">
        <img 
            src={image} 
            alt="Scrollable content" 
            className="w-full object-contain" 
          />
    </div>
  )
}
