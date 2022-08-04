import React from "react";
import { invoices } from "../../data";
import './FilterMenu.css'

const FilterMenu = () => {
    return (
        <div className="mainMenu">
            <select className="filterMenu">
                {invoices.map((invoice, i) => {
                    return <option key={i}>{invoice.category}</option>;
                })}
            </select>
        </div>
    );
};

export default FilterMenu;
