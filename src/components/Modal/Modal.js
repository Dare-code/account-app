import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, setNewCompany }) => {
    const [newCompany, setNewCompani] = useState({
        title: "Invoice",
        name: "Company name",
        date: "20/10",
        price: 599,
    })

    const submitNewCompany = (e) => {
        e.preventDefault()

        console.log(e.target.value)
    }


    return (
        <div className="modalBackground" >
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
                    <form onSubmit={(e) => submitNewCompany(e)}>
                        <input type='text' placeholder="Enter Name" name="name" value={newCompany.name} />
                        <input type='text' placeholder="Enter Price" name="price" value={newCompany.price} />
                        <input type="date" min="2022-01-01" max="2022-12-31" />
                        <input type='text' placeholder="Enter Title" name="title" value={newCompany.title} />
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
                    <button onClick={(e) => submitNewCompany(e)}>Continue</button>
                </div>
            </div>
        </div >
    );
}

export default Modal;
