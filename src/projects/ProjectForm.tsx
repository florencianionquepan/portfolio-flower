import React, { useRef, useState } from "react";
import { Project } from "../store/model/Project";
import { useForm } from "../hooks/useForm";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { ArrowUpTrayIcon, PlusCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { InputField } from "../formFields/InputField";
import { formValidations } from "./formValidations";
import { closeFormProject } from "../store/project/projectSlice";
import { Technologies } from "../assets/Technologies";
import { Technology } from "../store/model/Technology";
import { TechnologyDropZone } from "./TechnologyDropZone";
import { startEditProject, startNewProject } from "../store/project/thunk";
import { Link } from "../store/model/Link";
import { TextAreaField } from "../formFields/TextAreaField";

interface ProjectFormProps {
  projectToEdit: Project | null;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ projectToEdit }) => {
  const dispatch: AppDispatch = useDispatch();

  const initialFormState: Project = {
    id: projectToEdit?.id || undefined,
    title: projectToEdit?.title || "",
    description: projectToEdit?.description || "",
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [links, setLinks] = useState<Link[]>([{title:"", url:""}]);

  const {
    title,
    description,
    onInputChange,
    onSelectChange,
    formState,
    titleValid,
    descriptionValid,
    linksValid,
    technologiesValid,
    isFormValid,
  } = useForm<Project>(initialFormState, formValidations);

  const onSubmit = (event: React.SyntheticEvent) => {
    onSelectChange("technologies", selectedTechnologies);
    event.preventDefault();
    setFormSubmitted(true);
    //if (!isFormValid) return;
    projectToEdit?.id? dispatch(startEditProject(formState)) : dispatch(startNewProject(formState));
  };

  const descriptionHasError = !!descriptionValid && formSubmitted;
  const technologiesHasError = !!technologiesValid && formSubmitted;

  const handlecloseFormProject = () => {
    dispatch(closeFormProject());
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length === 0) return;
    //dispatch(startUploadFiles(target.files));
    console.log(event.target.files);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const addNewLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      { id: prevLinks.length + 1, title: "", url: "" },
    ]);
  };

  const deleteLink = (i:number) => {
    setLinks((prevLinks) => prevLinks.filter((_,j)=> j!==i));
  }
  


  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="space-y-12 w-full max-w-4xl mx-auto">
        <div className="border rounded border-2 border-purple-600 p-5 mt-5 bg-orange-200">
          <div className="flex justify-between">
            <h2 className="text-base font-semibold leading-7">New Project</h2>
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
            <div className="col-span-2 md:col-span-1 flex items-center">
              <InputField
                name="title"
                label="Title"
                value={title}
                onChange={onInputChange}
                hasError={!!titleValid && formSubmitted}
                errorMessage={titleValid}
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex items-start mx-auto">
              <div className="block w-full flex items-start">
              <label className="block text-sm font-medium leading-6  mr-2">
                  Imagenes
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

            <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">Links</label>
              {
                links.map((link,i)=>(
                  <div key={i} className="flex flex-row items-center mb-3">
                    <div className="basis-1/4">

                      <InputField
                      name={`title-${i}`}
                      label={i==0?'Title':''}
                      value={link.title}
                      onChange={onInputChange}
                      hasError={!!linksValid && formSubmitted}
                      errorMessage={linksValid}
                      />
                    </div>
                  <p className={`mx-1 ${i === 0 ? 'mt-5' : ''}`}>:</p>
                  <div className="flex basis-3/4 items-center">

                    <InputField
                    name={`url-${i}`}
                    label={i==0?'URL':''}
                    value={link.url}
                    onChange={onInputChange}
                    hasError={!!linksValid && formSubmitted}
                    errorMessage={linksValid}
                    />
                    
                    {i==0 && <button 
                    type="button"
                    onClick={addNewLink}
                    className="rounded hover:border-purple-800 ml-2 mt-1">
                      <PlusCircleIcon
                        className="h-6 w-6 mx-1 mt-4 text-purple-600 font-bold hover:text-purple-800"
                        aria-hidden="true" />
                    </button>
                    
                    } {i!=0 && <button 
                      type="button"
                      onClick={()=>deleteLink(i)}
                      className="rounded hover:border-purple-800 ml-2 mt-1">
                        <XCircleIcon
                          className="h-6 w-6 mx-1 text-purple-600 font-bold hover:text-purple-800"
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
                htmlFor={"description"}
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
            <Technologies/>

          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="border rounded border-2 border-purple-600 p-1 px-2" >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
