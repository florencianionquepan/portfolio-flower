import { FC } from "react";

interface InputFieldProps {
    label:string,
    name:string,
    value: string | number | readonly string[] | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.HTMLInputTypeAttribute,
    hasError: boolean,
    errorMessage: string | null | undefined
}

export const InputField: FC<InputFieldProps> = ({label, name, value, onChange, type="text", hasError=true, errorMessage=""}) => {
  return (
    <>
        <div className="block w-full">
              <label
                htmlFor={name}
                className="block text-sm font-medium leading-6">
                {label}
              </label>
              <div>
                <input
                  type={type}
                  name={name}
                  id={name}
                  autoComplete="false"
                  className={`block w-full bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${hasError?'border-red-500 focus:ring-red-500':
                  'border-purple-400 focus:ring-1 focus:ring-purple-600'}`}
                  value={value}
                  onChange={onChange}/>
                  {hasError && 
                  (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errorMessage}
                  </span> )
                  }
              </div>
        </div>
    </>
  )
}
