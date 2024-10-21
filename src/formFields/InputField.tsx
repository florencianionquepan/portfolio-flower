import { FC } from "react";

interface InputFieldProps {
    label:string,
    name:string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputFieldProps> = ({label, name, value, onChange}) => {
  return (
    <>
        <div className="sm:col-span-3">
              <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-white-500">
                {label}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name={name}
                  id={name}
                  autoComplete="false"
                  className="block w-full bg-transparent rounded-md border-0 py-1.5 text-white-500 
                  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={value}
                  onChange={onChange}/>
              </div>
        </div>
    </>
  )
}
