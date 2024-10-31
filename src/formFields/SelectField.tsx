import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { FC, useState } from "react"


interface SelectFieldProps{
    label:string,
    value: string,
    options: string[]
}

export const SelectField: FC<SelectFieldProps> = ({label, value, options}) => {
  const [selected, setSelected] = useState(value)

  return (
    <div className="sm:col-span-3">
        <Listbox value={value} onChange={setSelected}>
        <Label className="block text-sm font-medium leading-6 text-white-500">{label}</Label>

        <div className="relative mt-2">
            <ListboxButton className="relative w-full bg-transparent cursor-default 
            rounded-md py-1.5 pl-3 pr-10 text-white-500 text-left shadow-sm ring-1 
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                  focus:ring-inset focus:ring-fuchsia-200 sm:text-sm sm:leading- min-h-[40px]">
            <span className="flex items-center">
                <span className="ml-1 block truncate">{selected}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </span>
            </ListboxButton>

            <ListboxOptions transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm">
            {options.map((option) => (
                <ListboxOption
                key={option}
                value={option}
                className="group relative cursor-default select-none py-2 pl-3 
                pr-9 text-gray-900 hover:bg-fuchsia-200 hover:text-gray">
                    <div className="flex items-center">
                        <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                            {option}
                        </span>

                    </div>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                </ListboxOption>
            ))}
            </ListboxOptions>
        </div>
        </Listbox>
    </div>
  )
}
