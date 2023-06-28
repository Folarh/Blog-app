import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import PostParams from "./pages/params/PostParams";
import Create from "./pages/create/Create";
import SignUp from "./pages/signup/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <PostParams /> */}
      {/* <Create /> */}
      {/* <Settings /> */}
      <SignUp />
    </>
  );
}

export default App;
