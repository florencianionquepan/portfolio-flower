import { FC, useEffect, useState } from "react";

interface DateInputFieldProps {
    label:string,
    name:string,
    value?: Date | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean,
    hasError: boolean,
    errorMessage: string | null | undefined
}

export const InputDateField: FC<DateInputFieldProps> = ({
    label, 
    name, 
    value, 
    onChange,
    disabled=false,
    hasError=true,
    errorMessage=""
}) => {

    const [inputValue, setInputValue] = useState<string>(value ? value.toISOString().slice(0, 10) : '');

    useEffect(() => {
        setInputValue(value ? value.toISOString().slice(0, 10) : '');
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateString = e.target.value;
        setInputValue(dateString);
        onChange(e);
    };

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
                    type='date'
                    name={name}
                    id={name}
                    autoComplete="false"
                    className={`max-h-[46px] block w-full bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${hasError?'border-red-500 focus:ring-red-500':
                    'border-purple-400 focus:ring-1 focus:ring-purple-600'}`}
                    value={inputValue}
                    onChange={handleChange}
                    disabled={disabled}/>
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
  