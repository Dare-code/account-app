import React from "react";
import './Invoice.css'

const Invoice = ({ invoice }) => {
    return (
        <>
            <div>{invoice && invoice.title}</div>
            <div>{invoice && invoice.date}</div>
            <div>{invoice && invoice.name}</div>
            <div>{invoice && invoice.price}$</div>
            <div>Edit invoice</div>
            <button>Delete</button>
        </>
    );
};

export default Invoice;
