import React from "react";
import "./Invoices.css";
import Invoice from "../Invoice/Invoice";

const Invoices = ({ companies }) => {
  return (
    <>
      {companies.map((invoice, i) => {
        return (
          <div className="invoice">
            <Invoice key={i} invoice={invoice} />
          </div>
        );
      })}
    </>
  );
};
export default Invoices;
