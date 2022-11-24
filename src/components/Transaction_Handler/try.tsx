import React from 'react';
import { useRef, useEffect } from 'react';
import './try.css';

function TryWla(props: {
    transactions: { id: number; type: string; amount: number,desc:string; }[];
    settransactions: React.Dispatch<React.SetStateAction<{ id: number; type: string; amount: number,desc:string; }[]>>
}) {
    const { transactions, settransactions } = props;
    const desc =useRef<HTMLInputElement>(null!);
    const amount = useRef<HTMLInputElement>(null!);
    let tramont:number=0;
    let id:number=0;
    let trdesc:string="";
    let trtype:string="";
    let current_transaction: { id: number,type: string,amount: number,desc:string };

    useEffect(() => {
        if (desc.current) {
            desc.current.focus();
        }
    }, []);

    const dotransaction=(e:React.MouseEvent<HTMLButtonElement>):void=>{
    
        if(desc.current?.value==""){
            alert('Enter Description!');
            desc.current.focus();
            return;
        }
        else if(amount.current?.value==""){
            alert('Enter Amount!');
            amount.current.focus();
            return;
        }
        else{
            tramont=+amount.current.value;
            trdesc=desc.current.value;
            id=Math.round(Date.now() + Math.random()*100);
            if (tramont>=1) {
                trtype='income';
            }
            else{
                trtype="expense";
            }
            current_transaction={id,type:trtype,amount:tramont,desc:trdesc};
            
            transactions.push(current_transaction);
            settransactions([...transactions]);
            console.log(transactions);

            desc.current.value = '';
            amount.current.value = '';
        }
    }

    return (
        <div>
            <div id="transactionsdiv">
                <h2>Add New Transaction</h2>
                <hr />
                <div className="form">
                    <label>Description &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" placeholder="Detail of tranaction"  ref={desc}/>
                    <label >Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="number"placeholder='"+" for_income "-" for_expense' ref={amount} />
                    <button onClick={dotransaction}>Make Transaction</button>
                </div>
            </div>
        </div>
    )
}

export default TryWla
