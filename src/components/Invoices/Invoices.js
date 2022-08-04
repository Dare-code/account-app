import React from "react";
import "./Invoices.css";
import Invoice from '../Invoice/Invoice'

const Invoices = ({ company }) => {
    return (
        <>
            {company.map((invoice, i) => {
                return (
                    <div key={i} className="invoice">
                        <Invoice invoice={invoice} />
                    </div>
                );
            })}
        </>
    );
};

export default Invoices;
