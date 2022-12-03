import React from "react";
import { useLocation, useParams } from "react-router-dom";

// const User = ({match}) => {
//     return <h1>user {match.params.name} page</h1>
// }

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <h1>
        user {fname} {lname} page
      </h1>
      <p>My current location is {location.pathname} </p>
      {location.pathname === "/user/Rin2/thapa" ? (
        <button onClick={()=>history.goBack()}>Click Me</button>
      ) : null}
    </>
  );
};

export default User;
