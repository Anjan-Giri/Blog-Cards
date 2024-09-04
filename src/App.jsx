import { useState } from "react";
import "./index.css";
import "./App.css";
import BlogCard from "./components/BlogCard";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8 bg-black">
          Blog Cards
        </h1>
        <List />
      </div>
    </>
  );
}

export default App;
