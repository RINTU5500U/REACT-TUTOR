import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListCom from "./ListCom";

const ToDoList = () => {
  const [item, setItem] = useState("kuchh vi");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div"></div>
      <div className="center_div"></div>
      <br />
      <h1>ToDo List</h1>
      <br />
      <input
        type="text"
        value={item}
        placeholder="Add an Item"
        onChange={itemEvent}
      />
      <Button className="newBtn" onClick={listOfItems}>
        <AddCircleIcon />
      </Button>
      <br />
      <ol>
        <li>{item}</li>
        {newitem.map((val) => {
          return <ListCom text={val} />;
        })}
      </ol>
    </>
  );
};

export default ToDoList;
