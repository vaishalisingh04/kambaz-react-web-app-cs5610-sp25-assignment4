import { FaTrash } from "react-icons/fa";

export default function AssignmentDeleteButton({
  aid,
  deleteAssignment,
}: {
  aid: any;
  deleteAssignment: (id: any) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={(id: any) => {
          console.log("id for delete" + id);
          deleteAssignment(aid);
        }}
      />
    </div>
  );
}
