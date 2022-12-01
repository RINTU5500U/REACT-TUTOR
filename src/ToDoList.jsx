import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// import TextField from '@mui/material/TextField'

const ToDoList = (props) => {
  const [num, setNum] = useState(0);
  const incr = () => {
    setNum(num + 1);
  };
  const decr = () => {
    if (num === 0) {
      alert("zero is the minimum limit");
      num = 0;
    }
    setNum(num - 1);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div"></div>
          <Tooltip title='ADD'>
          <Button onClick={incr}>
            <AddIcon />
          </Button>
          </Tooltip>
          <Tooltip title='Delete'>
          <Button onClick={decr}>
            <DeleteIcon />
          </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
