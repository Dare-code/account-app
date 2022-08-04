import "./App.css";

//Components
import Navbar from "../src/components/Navbar/Navbar";
import FilterMenu from "./components/FilterMenu/FilterMenu";

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <FilterMenu />
    </div>
  );
};

export default App;
