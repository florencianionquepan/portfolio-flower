import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logoutSpring } from '../store/auth/thunks';

type UrlProps={
    imageURL: string
}

export const ProfileMenu = (props: UrlProps) => {

  const dispatch = useAppDispatch();

  const handleLogout = async() =>{
    await dispatch(logoutSpring());
  }

  return (
    <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    alt=""
                    src={props.imageURL}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
            </div>
              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-25 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-transparent-100" 
                  onClick={handleLogout}>
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
    </Menu>
  )
}
