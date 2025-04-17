import { PencilIcon } from "@heroicons/react/24/solid";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

interface EditionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}

export const EditionButton: React.FC<EditionButtonProps> = ({ onClick, disabled, label }) => {

  const { status, role } = useSelector((state: RootState) => state.auth);

  if (status !== 'auth' || !role.includes('ROLE_ADMIN')) return null;

  return (
    <button
      className="bg-transparent border border-2 border-purple-600 
        rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-2"
      onClick={onClick}
      disabled={disabled}
      aria-label={label} >
      <PencilIcon className="h-3 w-3 text-purple-600" />
    </button>
  );
};
