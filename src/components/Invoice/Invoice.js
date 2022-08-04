import React from "react";
import './Invoice.css'

const Invoice = ({ invoice }) => {
    return (
        <>
            <div>{invoice.title}</div>
            <div>{invoice.date}</div>
            <div>{invoice.name}</div>
            <div>{invoice.price}$</div>
            <div>Edit invoice</div>
            <button>Delete</button>
        </>
    );
};

export default Invoice;
