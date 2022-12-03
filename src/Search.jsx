import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState('');
  const inputEvent = (event) => {
    setImg(event.target.value)
  }
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Anything"
          value={img}
          onChange={inputEvent}
        />
        <Sresult name={img} />
      </div>
    </>
  );
};

export default Search;
