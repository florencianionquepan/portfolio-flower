import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logoutSpring } from '../store/auth/thunks';
import { useState } from 'react';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

type UrlProps={
    imageURL: string
}

export const ProfileMenu = (props: UrlProps) => {
  const [imageError, setImageError] = useState(false);

  const dispatch = useAppDispatch();

  const handleLogout = async() =>{
    await dispatch(logoutSpring());
  }

  return (
    <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray focus:ring-offset-1 focus:ring-offset-purple-600">
                  {(imageError || !props.imageURL) 
                  && 
                  <FaceSmileIcon className='h-8 w-8 text-purple-600'/>
                  }
                  
                  {!imageError && 
                  (<img
                    alt="Profile picture"
                    src={props.imageURL}
                    onError={()=>{ setImageError(true)}}
                    className="h-8 w-8 rounded-full"
                  />)
                  }
                </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-10 bottom-full mb-2 w-40 bg-purple-100
                          border border-1 border-purple-300
                          hover:border-purple-400 hover:bg-purple-200
                          origin-bottom-left rounded-md shadow-md
                          transition focus:outline-none 
                          data-[closed]:scale-95 data-[closed]:transform 
                          data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-black-900" 
                  onClick={handleLogout}>
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
    </Menu>
  )
}
