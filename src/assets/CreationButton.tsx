import { PlusIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface CreationButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const CreationButton: React.FC<CreationButtonProps> = ({ onClick, disabled }) => {

  const { status, role = [] } = useSelector((state: RootState) => state.auth);

  // Solo mostrar el botón si el usuario es admin
  if (status !== 'auth' || !role.includes('ROLE_ADMIN')) return null;

  return (
    <button
      className="bg-transparent border border-2 border-purple-600 
        rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-1"
      onClick={onClick}
      disabled={disabled} >
      <PlusIcon className="h-5 w-5 text-purple-600" />
    </button>
  );
};
