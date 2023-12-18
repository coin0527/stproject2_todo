import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Tododelete = ({ index, onDelete }) => {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <FontAwesomeIcon
      icon={faXmark}
      onClick={handleDelete}
      style={{
        fontSize: "20px",
        cursor: "pointer",
        marginLeft: "15px",
        color: "crimson",
      }}
    />
  );
};
