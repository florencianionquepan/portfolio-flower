import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

interface InputFileProps {
    fileInputRef: React.RefObject<HTMLInputElement>;
    onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreviews: string[];
    label: string;
}

export const InputFile: React.FC<InputFileProps> = ({
    fileInputRef,
    onFileInputChange,
    imagePreviews,
    label,
}) => {
  return (
    <>
        <div className="flex items-center mx-auto">
                <label className="block text-sm font-medium leading-6 mr-2">
                  {label}
                </label>
                <button
                  type="button"
                  className="border border-purple-600 rounded hover:border-purple-800"
                  onClick={() => fileInputRef.current?.click()} >
                  <ArrowUpTrayIcon
                    className="h-4 w-4 m-1 text-purple-600 hover:text-purple-800"
                    aria-hidden="true"> </ArrowUpTrayIcon>
                </button>
              
              <input
                className="form-control py-3 d-none"
                type="file"
                id="inputFile"
                accept="image/png, image/webp"
                multiple
                onChange={onFileInputChange}
                style={{ display: "none" }}
                ref={fileInputRef} />
        </div>

        {/* Vista previa de imágenes */}
        <div className="w-full grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 mt-1">
            {imagePreviews.map((preview, index) => (
                <div key={index}
                    className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
                    <img
                        src={preview}
                        alt={`preview-${index}`}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    </>
  )
}
