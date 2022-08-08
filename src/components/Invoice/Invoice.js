import React from "react";
import './Invoice.css'

const Invoice = ({ company }) => {
    return (
        <>
            <div>{company && company.title}</div>
            <div>{company && company.date}</div>
            <div>{company && company.name}</div>
            <div>{company && company.price}$</div>
            <div>Edit invoice</div>
            <button>Delete</button>
        </>
    );
};

export default Invoice;
