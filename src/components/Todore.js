import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Todore = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ fontSize: "20px", cursor: "pointer", marginLeft: "15px" }}
      />
    </>
  );
};
