import React from "react";
import Error from "./Error";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import User from "./User";

const App = () => {
  const Name = () => {
    return <h1>Hello, I am a Name Page</h1>;
  };
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route exact path="/service" component={Contact} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/user/:fname/:lname" component={User} />
        <Route component={Error} />
      </Routes>
    </>
  );
};

export default App;
