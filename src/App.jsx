import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Error from "./Error";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import User from "./User";
// import Search from "./Search";

// const App = () => {
//   const Name = () => {
//     return <h1>Hello, I am a Name Page</h1>;
//   };
//   return (
//     <>
//       <Menu />
//       <Routes>
//         <Route exact path="/" component={() => <About name="About" />} />
//         <Route exact path="/service" component={Contact} />
//         <Route exact path="/contact" component={Contact} />
//         <Route path="/contact/Name" component={Name} />
//         <Route path="/search" component={Search} />
//         <Route path="/user/:fname/:lname" component={User} />
//         <Route component={Error} />
//       </Routes>
//     </>
//   );
// };

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center">Welcome</h1>
        <br />
        <div className="text-center">
          <div class="card" style={{width: '18rem'  }}>
            <img src="https://picsum.photos/seed/picsum/200/150" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="https://youtube.com" class="btn btn-outline-success">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
