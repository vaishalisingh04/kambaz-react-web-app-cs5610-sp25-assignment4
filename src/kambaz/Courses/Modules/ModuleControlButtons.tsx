import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import ProtectedFacultyRoute from "../../Account/ProtectedFacultyRoute";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <ProtectedFacultyRoute>
        <FaPencil
          onClick={() => editModule(moduleId)}
          className="text-primary me-3"
        />
        <FaTrash
          className="text-danger me-2 mb-1"
          onClick={() => deleteModule(moduleId)}
        />
      </ProtectedFacultyRoute>
      <GreenCheckmark />
      <ProtectedFacultyRoute>
        <BsPlus className="fs-4" />
      </ProtectedFacultyRoute>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
