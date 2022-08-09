import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, setCompany, company }) => {
    const [newCompany, setNewCompany] = useState([]);

    const submitNewCompany = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setNewCompany([
            ...newCompany,
            {
                [name]: value
            }]);
    };
    const addCompany = () => {
        setCompany(newCompany)
    }

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
                    <form onSubmit={submitNewCompany}>
                        <input
                            type="text"
                            onChange={submitNewCompany}
                            placeholder="Enter Name"
                            name="name"
                            value={company.name}
                        />
                        <input
                            type="number"
                            onChange={submitNewCompany}
                            min="0"
                            placeholder="Enter Price"
                            name="price"
                            value={company.price}
                        />
                        <input type="date" name="date" min="2022-01-01" max="2022-12-31" />
                        <input
                            type="text"
                            onChange={submitNewCompany}
                            placeholder="Enter Title"
                            name="title"
                            value={company.title}
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
                            addCompany()
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
