import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import PostParams from "./pages/params/PostParams";
import Create from "./pages/create/Create";
import SignUp from "./pages/signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<Create />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post/:id" element={<PostParams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
