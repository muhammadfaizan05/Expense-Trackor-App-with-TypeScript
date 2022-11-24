import React from 'react';
import './display.css';



interface Props{
  transactions: { id:number, type:string, amount:number,desc:string}[];
  settransactions: React.Dispatch<React.SetStateAction<{ id: number; type: string; amount: number,desc:string; }[]>>;
}

const Display_Record:React.FC<Props> = ({transactions,settransactions}) => {


  const deletetranasaction=(id:number,tranactions:{ id:number, type:string, amount:number,desc:string}[],settransactions: React.Dispatch<React.SetStateAction<{ id: number; type: string; amount: number,desc:string; }[]>>)=>{
    // alert("You want to delete this transaction"+id);
    // console.log(tranactions);
    // console.log(settransactions);
    let new_array=transactions.filter( transaction => transaction.id !== id);
    // console.log(new_array);
    settransactions([...new_array]);
    
  }

return (
  <div className="mainhistory">
     <h2>Transaction History</h2>
            <hr/>
     <table>
    {
      transactions.map(todo=>(
        <tr className="tablereow"><td className="icon" onClick={()=>{deletetranasaction(todo.id,transactions,settransactions)}}>x</td><td>{todo.desc}</td><td>{Math.abs(todo.amount)}</td></tr>                 
        ))        
      }
      </table>
  </div>
)
}

export default Display_Record




