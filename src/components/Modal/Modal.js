import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, setCompanies, companies }) => {
  const [company, setCompany] = useState();
    console.log(company)
  const updateCompany = (e) => {
  
  
    const { value, name } = e.target;
    setCompany({
      ...company,
      [name]: value,
    });
  };

  const addCompany = () => {
    setCompanies([...companies, company]);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Add new Company</h1>
        </div>
        <div className="body">
          <form onSubmit={updateCompany}>
            <input
              type="text"
              onChange={updateCompany}
              placeholder="Enter Name"
              name="name"
            />
            <input
              type="number"
              onChange={updateCompany}
              min="0"
              placeholder="Enter Price"
              name="price"
            />
            <input type="date" name="date" min="2022-01-01" max="2022-12-31" />
            <input
              type="text"
              onChange={updateCompany}
              placeholder="Enter Title"
              name="title"
            />
          </form>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
              addCompany();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
