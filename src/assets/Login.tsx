import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";
import { UserCircleIcon } from '@heroicons/react/24/outline';


export const Login = () => {
    const apiUrl=import.meta.env.VITE_API_URL;
    const MySwal= withReactContent(Swal);

    const handleProviderLogin = (provider: 'github' | 'google') => {
        window.location.href = `${apiUrl}/oauth2/authorization/${provider}`;
    };

    const handleLoginClick = () => {
        MySwal.fire({
          title: 'Login',
          showCancelButton: true,
          showConfirmButton: false,
          background: '#F0F0F0',
          cancelButtonText: 'Close',
          html: `
                <p style=" padding: 10px; ">The login is intended for portfolio management only. If you decide to try it, the editing functionality will be available only to the site owner.</p>
                <button id="github-login" class="swal2-styled" style="background-color:#242424; color:#F0F0F0; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">GitHub</button>
                <button id="google-login" class="swal2-styled" style="background-color:#DB4A39; color:#F0F0F0; padding: 10px 20px; border-radius: 5px;">Google</button>
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
    <button type="button"
            onClick={handleLoginClick}
            className="bg-transparent hover:bg-gray-700 rounded-full hover:text-fuchsia-400">
              <UserCircleIcon className="h-10 w-10 text-fuchsia-400"/>
    </button>
  )
}
