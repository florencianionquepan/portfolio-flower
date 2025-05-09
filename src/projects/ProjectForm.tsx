import React, { useEffect, useRef, useState } from "react";
import { Project } from "../store/model/Project";
import { useForm } from "../hooks/useForm";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { PlusCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { InputField } from "../formFields/InputField";
import { formValidations } from "./formValidations";
import { closeFormProject } from "../store/project/projectSlice";
import { Technologies } from "../assets/Technologies";
import { Technology } from "../store/model/Technology";
import { TechnologyDropZone } from "./TechnologyDropZone";
import { startEditProject, startNewProject } from "../store/project/thunk";
import { Link } from "../store/model/Link";
import { TextAreaField } from "../formFields/TextAreaField";
import { SelectField } from "../formFields/SelectField";
import { Status, statusArray } from "../store/model/Status";
import { InputDateField } from "../formFields/InputDateField";
import { InputFile } from "../formFields/InputFile";
import { Image } from "../store/model/Image";
import { useSelector } from "react-redux";
import { FullScreenLoader } from "../assets/FullScreenLoader";

interface ProjectFormProps {
  projectToEdit: Project | null;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ projectToEdit }) => {
  //console.log(projectToEdit);
  const dispatch: AppDispatch = useDispatch();
  const {loading} = useSelector((state:RootState)=> state.project);

  const initialFormState: Project = {
    id: projectToEdit?.id || undefined,
    title: projectToEdit?.title || "",
    description: projectToEdit?.description || "",
    technologies: projectToEdit?.technologies || [],
    status: projectToEdit?.status || Status.IN_PROGRESS,
    endDate: projectToEdit? new Date(projectToEdit.endDate!) : undefined,
    images: projectToEdit?.images || [],
    links: projectToEdit?.links || []
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>(
    initialFormState.technologies
  );
  const [links, setLinks] = useState<Link[]>(
    initialFormState.links.length === 0? [{title:"", url:""}] : initialFormState.links 
  );

  useEffect(() => {
    onSelectChange("technologies", selectedTechnologies);
  }, [selectedTechnologies]);  

  const {
    title,
    description,
    status,
    endDate,
    onInputChange,
    onSelectChange,
    updateFormImages,
    formState,
    titleValid,
    descriptionValid,
    statusValid,
    endDateValid,
    linksValid,
    technologiesValid,
    isFormValid,
  } = useForm<Project>(initialFormState, formValidations);

  const handlecloseFormProject = () => {
    dispatch(closeFormProject());
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
    const validLinks = links.filter((link) => link.title.trim() !== "" || link.url.trim() !== "");
    const finalFormState = { ...formState, links: validLinks };
    if (!isFormValid) return;
    projectToEdit?.id? dispatch(startEditProject(finalFormState, selectedFiles)) : dispatch(startNewProject(finalFormState, selectedFiles));
  };

  const technologiesHasError = !!technologiesValid && formSubmitted;

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //esto es para la vista previa, el envio al back se hace por file
    if (event.target.files?.length === 0) return;
    if (event.target.files) {
      const files=event.target.files;
      setSelectedFiles(Array.from(files));

      const previews: Image[] = [];
      Array.from(files).forEach((f:File)=>{
        const reader=new FileReader();
        reader.onload = (e) =>{
          if(e.target?.result){
            //setImagePreviews([...previews]);
            previews.push({ url: e.target.result as string });

          // Asegurar que no se sobrescriban imágenes previas
          setImagePreviews((prev) => [...prev, { url: e.target!.result as string }]);
          }
        };
        reader.readAsDataURL(f);
      })
    }
    //dispatch(startUploadFiles(target.files));
    //console.log(event.target.files);
  };

  const onRemoveImage = (index: number) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

    setImagePreviews(updatedPreviews);
    updateFormImages(updatedPreviews);
  };

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<Image[]>( initialFormState.images);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addNewLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      { title: "", url: "" },
    ]);
  };

  const deleteLink = (i:number) => {
    setLinks((prevLinks) => prevLinks.filter((_,j)=> j!==i));
  }

  const handleLinkChange = (index: number, field: "title" | "url", value: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      )
    );
  };

  useEffect(() => {
    onSelectChange('links', links);
  }, [links]);
  


  return (
    <>
      {loading && <FullScreenLoader message="Saving project..." 
                      bgClass="bg-gray-500 bg-opacity-50 pointer-events-none"
                      textClass="text-black text-lg"/>}
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="space-y-12 w-full max-w-4xl mx-auto">
          <div className="border rounded border-2 border-purple-600 p-5 mt-5 bg-orange-200">
            <div className="flex justify-between">
              <h2 className="text-base font-semibold leading-7">
                {projectToEdit ? `Edit ${projectToEdit.title}` : 'New Project'}
              </h2>
              <button type="button" onClick={handlecloseFormProject}>
                <XMarkIcon
                  className="h-6 w-6 m-1 text-purple-600 hover:text-purple-800"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
              role="listitem"
              aria-label="Project background" >
              <div className="col-span-2 md:col-span-1 flex items-center pb-3">
                <InputField
                  name="title"
                  label="Title"
                  value={title}
                  onChange={onInputChange}
                  hasError={!!titleValid && formSubmitted}
                  errorMessage={titleValid}
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col md:items-start mx-1">
                <InputFile
                  fileInputRef={fileInputRef}
                  onFileInputChange={onFileInputChange}
                  imagePreviews={imagePreviews}
                  label={"Imagenes"}
                  onRemoveImage={onRemoveImage} // Se pasa la función de eliminar imágenes
                />
              
              </div>

              <div className="col-span-2">
                <TextAreaField 
                label="Description"
                name="description"
                value={description}
                onChange={onInputChange}
                hasError={!!descriptionValid && formSubmitted}
                errorMessage={descriptionValid}
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <SelectField 
                  label={"Status"}
                  value={status}
                  onSelectChange={(value) => onSelectChange("status", value)}
                  options={statusArray}
                  hasError={!!statusValid && formSubmitted}
                  errorMessage={"Must have a value"}
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <InputDateField
                    name="endDate"
                    label="End Date"
                    value={endDate}
                    onChange={onInputChange}
                    hasError={!!endDateValid && formSubmitted}
                    errorMessage={endDateValid}     
                />
              </div>

              <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700 md:pb-0">Links</label>
                {
                  links.map((link,i)=>(
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center mb-5 md:mb-3 
                                            border rounded border-purple-400 p-2 pt-1
                                            md:border-0 md:rounded-none md:p-0">
                      <div className="w-full md:basis-1/4">

                        <InputField
                        name={`title-${i}`}
                        label={i == 0 || window.innerWidth < 768 ? 'Title' : ''}
                        value={link.title}
                        onChange={(e)=>handleLinkChange(i,"title",e.target.value)}
                        hasError={!!linksValid && formSubmitted}
                        errorMessage={linksValid}
                        />
                      </div>
                      <p className={`md:mx-1 hidden md:block ${i === 0 ? 'md:mt-5' : ''}`}>:</p>
                    <div className="relative flex w-full md:basis-3/4 items-center">
                    <div className="w-full">
                      <InputField
                        name={`url-${i}`}
                        label={i == 0 || window.innerWidth < 768 ? 'URL' : ''}
                        value={link.url}
                        onChange={(e) => handleLinkChange(i, "url", e.target.value)}
                        hasError={!!linksValid && formSubmitted}
                        errorMessage={linksValid}
                      />
                    </div>
                      
                      {i==0 && <button 
                        type="button"
                        onClick={addNewLink}
                        className="rounded hover:border-purple-800 md:ml-2 md:mt-1 absolute -right-2 -top-16 md:relative md:right-auto md:top-auto">
                          <PlusCircleIcon
                            className="h-6 w-6 md:mx-1 md:mt-4 text-purple-600 font-bold hover:text-purple-800"
                            aria-hidden="true" />
                        </button> 
                      } {i!=0 && <button 
                        type="button"
                        onClick={()=>deleteLink(i)}
                        className="rounded hover:border-purple-800 md:ml-2 md:mt-0 absolute -right-2 -top-16 md:relative md:right-auto md:top-auto">
                          <XCircleIcon
                            className="h-6 w-6 md:mx-1 text-purple-600 font-bold hover:text-purple-800"
                            aria-hidden="true" />
                        </button>
                        
                        }
                      

                      </div>
                    </div>
                  ))
                }
                
                
              </div>

              <div className="col-span-2">
                <label
                  htmlFor={"technologies"}
                  className="block text-sm font-medium leading-6" >
                  Technologies
                </label>

                <TechnologyDropZone
                  selectedTechnologies={selectedTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                  technologiesHasError={technologiesHasError}
                />

                {/* Select oculto para enviar las tecnologías como IDs */}
                {selectedTechnologies.length>0 &&
                (<select
                style={{visibility: "hidden", maxHeight:'1px'}}
                  id="technologies-select"
                  name="technologies"
                  value={selectedTechnologies.map((tech) => tech.id!.toString())}
                  onChange={() => {}}
                  multiple >
                  
                </select>) 
                }

              </div>
              <div className="col-span-2">
                <Technologies/>
              </div>

            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="border rounded border-2 border-purple-600 p-1 px-2" >
                {loading? 'Saving...': 'Save'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
    
  );
};
