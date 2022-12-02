import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName value={"Rin2"}>
        <LastName.Provider value={"Swain"}>
          <CompA />
        </LastName.Provider>
      </FirstName>
    </>
  );
};

export default App;
export { FirstName, LastName };
