import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Demo from "./Pages/Demo";
import Demo1 from "./Pages/Demo1";
import Demo2 from "./Pages/Demo2";
import Demo3 from "./Pages/Demo3";
import Demo4 from "./Pages/Demo4";
import Demo5 from "./Pages/Demo5";
import Demo6 from "./Pages/Demo6";
import Demo7 from "./Pages/Demo7";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TailwindDemo from "./Pages/TailwindDemo";
import TailwindDemo1 from "./Pages/TailwindDemo1";
import TailwindDemo2 from "./Pages/TailwindDemo2";
import TailwindDemo3 from "./Pages/TailwindDemo3";
import TailwindDemo4 from "./Pages/TailwindDemo4";
import TailwindDemo5 from "./Pages/TailwindDemo5";
import TailWindDemo6 from "./Pages/TailWindDemo6";
import TodoList from "./Pages/TodoList";
import TailwindDemo7 from "./Pages/TailwindDemo7";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo1" element={<Demo1 />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/demo3" element={<Demo3 />} />
        <Route path="/demo4" element={<Demo4 />} />
        <Route path="/demo5" element={<Demo5 />} />
        <Route path="/demo6" element={<Demo6 />} />
        <Route path="/demo7" element={<Demo7 />} />
        <Route path="/tailwinddemo" element={<TailwindDemo />} />
        <Route path="/tailwinddemo1" element={<TailwindDemo1 />} />
        <Route path="/tailwinddemo2" element={<TailwindDemo2 />} />
        <Route path="/tailwinddemo3" element={<TailwindDemo3 />} />
        <Route path="/tailwinddemo4" element={<TailwindDemo4 />} />
        <Route path="/tailwinddemo5" element={<TailwindDemo5 />} />
        <Route path="/tailwinddemo6" element={<TailWindDemo6 />} />
        <Route path="/tailwinddemo7" element={<TailwindDemo7 />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
