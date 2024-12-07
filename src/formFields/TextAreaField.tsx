import { FC } from "react";

interface TextAreaProps {
    label:string,
    name:string,
    value: string | number | readonly string[] | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasError: boolean,
    errorMessage: string | null | undefined
}

export const TextAreaField: FC<TextAreaProps> = ({label, name, value, onChange, hasError=true, errorMessage=""}) => {
  return (
    <>
    <label
                htmlFor={"description"}
                className="block text-sm font-medium leading-6" >
                {label}
              </label>
              <textarea
                className={`block w-full min-h-[100px] bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${
                  hasError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-purple-400 focus:ring-1 focus:ring-purple-600"
                }`}
                name={name}
                rows={4}
                cols={20}
                value={value}
                onChange={onChange}
                
              />
              {hasError && 
                  (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errorMessage}
                  </span> )
                  }
    </>
  )
}
