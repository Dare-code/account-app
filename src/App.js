import "./App.css";

//Components
import Navbar from "../src/components/Navbar/Navbar";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import Invoices from "./components/Invoices/Invoices";
import { useState } from "react";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Navbar
        setCompanies={setCompanies}
        companies={companies}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <FilterMenu />
      <Invoices companies={companies} />
    </div>
  );
};

export default App;
