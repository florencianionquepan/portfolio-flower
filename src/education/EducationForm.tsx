import { useForm } from "../hooks/useForm";

interface EducationForm {
    name: string,
    institution: string
}


export const EducationForm = () => {

  const { name, institution, onInputChange }  = useForm<EducationForm>({
    name:'ffg',
    institution:'gbgb'
  });

  return (
    <form autoComplete="off">
      <div className="space-y-12">
        <div className="border rounded border-white-900 p-5 mt-5">
          <h2 className="text-base font-semibold leading-7 text-white-900">
            New Education
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white-500">
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full bg-transparent rounded-md border-0 py-1.5 text-white-500 
                  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={onInputChange}/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="institution"
                className="block text-sm font-medium leading-6 text-white-500">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  autoComplete="family-name"
                  className="block w-full bg-transparent rounded-md border-0 py-1.5 text-white-500 
                  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={institution}
                  onChange={onInputChange}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
