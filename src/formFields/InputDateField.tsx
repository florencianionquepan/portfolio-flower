import { FC, useEffect, useState } from "react";

interface DateInputFieldProps {
    label:string,
    name:string,
    value: Date | null,
    onChange: (date: Date | null) => void;
    disabled?: boolean,
    hasError: boolean,
    errorMessage: string
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

    // Actualiza el estado del input cuando cambia el `value` prop
    useEffect(() => {
        setInputValue(value ? value.toISOString().slice(0, 10) : '');
    }, [value]);

    // Convierte el valor de cadena a `Date` y lo envía en el evento `onChange`
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateString = e.target.value;
        setInputValue(dateString);
        const newDate = dateString ? new Date(dateString) : null;
        onChange(newDate);
    };

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
                    name={name}
                    id={name}
                    autoComplete="false"
                    className={`block w-full bg-transparent py-1.5 px-2 border rounded-md focus:outline-none ${hasError?'border-red-500 focus:ring-red-500':
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
  