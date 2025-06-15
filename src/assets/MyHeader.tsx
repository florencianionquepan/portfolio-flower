import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Logo } from "./Logo"
import { useScrollSpyNavigation } from "../hooks/useScrollSpyNavigation"

export const MyHeader = () => {

  const sectionIds = ['about-me', 'education', 'projects', 'contact'];
  const activeSection = useScrollSpyNavigation(sectionIds);


  const navigation = [
    { name: 'Acerca de', href: '#about-me' },
    { name: 'Educación', href: '#education' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];  
  
  function classNames(...classes: unknown[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Disclosure as="nav" className="bg-purple-100 py-2 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="mx-auto px-2 md:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-2 flex items-center pr-2 md:static md:inset-auto sm:ml-6 md:pr-0">
              <Logo/> 
            </div>

            {/* Parte menu-movil */}

            <div className="absolute inset-y-0 right-2 flex items-center md:hidden">


              <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-purple-600 
                                            hover:text-purple-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>

            {/* Parte menu-desktop */}
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      activeSection === item.href.substring(1)
                        ? 'underline underline-offset-8 decoration-solid'
                        : 'hover:underline underline-offset-8 hover:text-black-100',
                      'rounded-md px-3 py-2 text-md font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}

                </div>
              </div>


        <DisclosurePanel className="md:hidden" style={{zIndex:'10'}}>
          <div className="space-y-1 px-2 pb-3 pt-3 mt-64 bg-black-700 rounded border border-gray-700 bg-purple-100">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  activeSection === item.href.substring(1)
                    ? 'underline underline-offset-8 decoration-solid'
                    : 'hover:underline underline-offset-8 hover:text-black-100',
                  'block rounded-md px-3 py-2 text-md font-medium'
                )} >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
        </div>
        </div>

      </Disclosure>

    </>

  )
}
