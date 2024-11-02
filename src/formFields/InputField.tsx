import { FC } from "react";

interface InputFieldProps {
    label:string,
    name:string,
    value: string | Date | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.HTMLInputTypeAttribute
}

export const InputField: FC<InputFieldProps> = ({label, name, value, onChange, type="text", className=""}) => {
  return (
    <>
        <div className="block w-full">
              <label
                htmlFor={name}
                className="block text-sm font-medium leading-6">
                {label}
              </label>
              <div className="mt-2">
                <input
                  type={type}
                  name={name}
                  id={name}
                  autoComplete="false"
                  className="block w-full bg-transparent rounded-md border border-purple-400 py-1.5
                  focus:outline-none focus:ring-1 focus:ring-purple-600 px-2"
                  value={value}
                  onChange={onChange}/>
              </div>
        </div>
    </>
  )
}
