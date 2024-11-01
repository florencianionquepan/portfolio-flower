import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";
import { UserIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { startSignIn } from "../store/auth/thunks";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ProfileMenu } from "./ProfileMenu";


export const Login = () => {
    const apiUrl=import.meta.env.VITE_API_URL;
    const MySwal= withReactContent(Swal);

    const dispatch= useDispatch<AppDispatch>();
    const { status, imageURL } = useSelector( (state: RootState) => state.auth)
    
    const isAuth= useMemo(()=> status =='auth', [status])
    const notAuth= useMemo(()=> status=='no-auth', [status])
    const checkingAuth= useMemo(()=> status=='checking', [status])

    //capaz esta logica la muevo toda al thunk
    const handleProviderLogin = async (provider: 'github' | 'google'): Promise<void> => {
        window.location.href = `${apiUrl}/oauth2/authorization/${provider}`;
        dispatch( startSignIn() );
    };

    const handleLoginClick = () => {
        MySwal.fire({
          title: 'Login',
          showCancelButton: false,
          showConfirmButton: false,
          background: '',
          customClass:{
            title:'suse'
          },
          html: `
                <button id="github-login" class="swal2-styled suse" style="background-color:#242424; color:#F0F0F0; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">GitHub</button>
                <button id="google-login" class="swal2-styled suse" style="background-color:#DB4A39; color:#F0F0F0; padding: 10px 20px; border-radius: 5px;">Google</button>
            `,
          didOpen: () => {
            const githubButton = document.getElementById('github-login');
            const googleButton = document.getElementById('google-login');
            
            githubButton?.addEventListener('click', () => handleProviderLogin('github'));
            googleButton?.addEventListener('click', () => handleProviderLogin('google'));
          }
        });
      };

  return (
    <>
      { isAuth && <ProfileMenu imageURL={imageURL!}/> }
      { notAuth &&
        (<button type="button"
          onClick={handleLoginClick}
          className="bg-transparent border border-2 border-purple-600 rounded-full hover:shadow hover:shadow-purple-600">
            <UserIcon className="h-8 w-9 text-purple-600"/>
        </button>)
      }
      { checkingAuth && <p>...</p> }
    </>
    
  )
}
