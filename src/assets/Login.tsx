import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";


export const Login = () => {
    const apiUrl=import.meta.env.VITE_API_URL;
    const MySwal= withReactContent(Swal);

    const handleProviderLogin = (provider: 'github' | 'google') => {
        window.location.href = `${apiUrl}/oauth2/authorization/${provider}`;
    };

    const handleLoginClick = () => {
        MySwal.fire({
          title: 'Login',
          text: 'Choose a login option:',
          showCancelButton: true,
          showConfirmButton: false,
          background: '#F0F0F0',
          cancelButtonText: 'Close',
          html: `
                <button id="github-login" class="swal2-styled" style="background-color:#242424; color:#F0F0F0; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">Login with GitHub</button>
                <button id="google-login" class="swal2-styled" style="background-color:#DB4A39; color:#F0F0F0; padding: 10px 20px; border-radius: 5px;">Login with Google</button>
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
            className="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-fuchsia-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            LOGIN
    </button>
  )
}
