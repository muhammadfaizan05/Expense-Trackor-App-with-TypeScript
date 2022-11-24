import React, { useState } from 'react';
import './headerstyle.css';


// Main Header Funcion Starts Here    

function Header(props: {
    transaction: {
        id: number;
        type: string;
        amount: number;
        desc: string;
    }[]
}) {

    const { transaction } = props;

    let total: number = 0;
    let income: number = 0;
    let expense: number = 0;

    transaction.map((single_transaction) => {

        total += single_transaction.amount;
        if (single_transaction.amount > 1) {
            income += single_transaction.amount;
        }
        else {
            expense +=-(single_transaction.amount);
        }


    })


    return (<>
        <div>
            <h2>Expense Trackor By Muhammad Faizan </h2>
            <h2 className="currntinfo"> Current Balance</h2>
            <h2 id="balance">${total}.00</h2>
        </div>


        <div id="container">
            <div id="inome">
                <h3>Income</h3>
                <span id="incomeamount">{income}</span>
            </div>
            <hr />
            <div id="expense">
                <h3>Expense</h3>
                <span id="expenseamount">{expense}</span>
            </div>
        </div>
    </>
    )
}

export default Header
