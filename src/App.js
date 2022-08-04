import "./App.css";

//Components
import Navbar from "../src/components/Navbar/Navbar";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import Invoices from "./components/Invoices/Invoices";
import { useState } from "react";

const App = () => {
  const [company, setCompany] = useState([]);

  const addNewCompany = () => {
    setCompany([
      ...company,
      {
        title: "Invoice",
        name: "Company name",
        date: "20/10",
        price: 599,
      },
    ]);
  };

  return (
    <div className="App">
      <Navbar setCompany={setCompany} addNewCompany={addNewCompany} />
      <FilterMenu />
      <Invoices company={company} />
    </div>
  );
};

export default App;
