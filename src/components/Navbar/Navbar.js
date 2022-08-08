import React from "react";
import logo from "../images/logo.jpg";
import "./Navbar.css";
import Modal from "../Modal/Modal";

const Navbar = ({
    addNewCompany,
    setCompany,
    company,
    modalOpen,
    setModalOpen,
}) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="img" />
            </div>
            <div className="menu">
                <ul>
                    <li>INVOICE APP</li>
                </ul>
            </div>
            <div className="user">
                <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Add new Company
                </button>

                {modalOpen && (
                    <Modal
                        company={company}
                        setCompany={setCompany}
                        setOpenModal={setModalOpen}
                        addNewCompany={addNewCompany}
                    />
                )}
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Navbar;
