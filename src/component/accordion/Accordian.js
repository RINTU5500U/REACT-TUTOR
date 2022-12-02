import React, { useState } from "react";
import "./accordian.css";
import { questions } from "./api";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main_div">
        <h1> React Interview Questions </h1>
        {data.map((curElem) => {
          const { id, question, answer } = curElem;
          return <MyAccordian key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
