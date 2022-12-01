import React, { useState } from "react";
import ClearAllIcon from "@material-ui/icons/ClearAll";

const ListCom = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todo_style">
        <span onClick={cutIt}>
          {" "}
          <ClearAllIcon className="deleteIcon" />{" "}
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {" "}
          {props.text}{" "}
        </li>
      </div>
    </>
  );
};

export default ListCom;
