import React, { useState } from 'react'
import logo from '../images/logo.jpg'
import './Navbar.css'
import Modal from '../Modal/Modal'

const Navbar = ({ addNewCompany, setNewCompany }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='navbar'>
            <div className='logo'><img src={logo} alt='img' /></div>
            <div className='menu'>
                <ul>
                    <li>INVOICE APP</li>
                </ul>
            </div>
            <div className='user'>
                <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                        addNewCompany()
                    }}
                >
                    Add new Company
                </button>

                {modalOpen && <Modal setNewCompany={setNewCompany} setOpenModal={setModalOpen} />}
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    )
}


export default Navbar