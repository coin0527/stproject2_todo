import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TodoSelect = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faCheck}
      style={{
        fontSize: "20px",
        marginLeft: "15px",
        cursor: "pointer",
        color: "green",
      }}
      onClick={onClick}
    />
  );
};
