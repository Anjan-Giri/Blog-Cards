import "./index.css";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-12 py-12">
          Blog Cards
        </h1>
        <List />
      </div>
    </>
  );
}

export default App;
