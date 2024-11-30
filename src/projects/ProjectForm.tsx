import React, { useRef, useState } from "react";
import { Project } from "../store/model/Project";
import { useForm } from "../hooks/useForm";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { InputField } from "../formFields/InputField";
import { formValidations } from "./formValidations";
import { closeFormProject } from "../store/project/projectSlice";

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

  const {
    title,
    description,
    onInputChange,
    formState,
    titleValid,
    descriptionValid,
    isFormValid,
  } = useForm<Project>(initialFormState, formValidations);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
  };

  const handlecloseFormProject = () => {
    dispatch(closeFormProject());
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length === 0) return;
    //dispatch(startUploadFiles(target.files));
    //console.log(target.files);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const descriptionHasError = !!descriptionValid && formSubmitted;

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
              <label
                htmlFor={"description"}
                className="block text-sm font-medium leading-6" >
                Description
              </label>
              <textarea
                className={`block w-full bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${
                  descriptionHasError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-purple-400 focus:ring-1 focus:ring-purple-600"
                }`}
                name="description"
                rows={4}
                cols={20}
                value={description}
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor={"description"}
                className="block text-sm font-medium leading-6"
              >
                Technologies
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="border rounded border-2 border-purple-600 p-1 px-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
