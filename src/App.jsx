import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogCard from "./components/BlogCard";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Blog Cards</h1>
        <List />
      </div>
    </>
  );
}

export default App;
