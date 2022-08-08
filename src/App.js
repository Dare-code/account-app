import "./App.css";

//Components
import Navbar from "../src/components/Navbar/Navbar";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import Invoices from "./components/Invoices/Invoices";
import { useState } from "react";

const App = () => {
  const [company, setCompany] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar
        setCompany={setCompany}
        company={company}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <FilterMenu />
      <Invoices company={company} />
    </div>
  );
};

export default App;
