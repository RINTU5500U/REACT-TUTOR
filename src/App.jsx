import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(()=>{
    document.title = `you clicked ${num} times`
  })
  const add = () => { setNum(num + 1)};

  return (
    <>
      <button onClick={add}>Click Me {num}</button>
    </>
  );
};

export default App;
