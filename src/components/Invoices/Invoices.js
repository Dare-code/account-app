import React from "react";
import "./Invoices.css";
import Invoice from "../Invoice/Invoice";

const Invoices = ({ company }) => {
    return (
        <>
            <div className="invoice">
                <Invoice company={company} />
            </div>
        </>
    );
};

export default Invoices;
