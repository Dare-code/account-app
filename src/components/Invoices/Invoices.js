import React from "react";
import "./Invoices.css";
import Invoice from "../Invoice/Invoice";

const Invoices = ({ company }) => {
    return (
        <>
            <div className="invoice">
                {company.map((invoice, i) => {
                    return <Invoice key={i} invoice={invoice} />
                })}
            </div>
        </>
    );
};

export default Invoices;
