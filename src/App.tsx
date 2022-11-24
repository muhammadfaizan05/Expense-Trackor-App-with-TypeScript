import React,{useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import TryWla from './components/Transaction_Handler/try';
import Display_record from './components/Display_Record/display_record';

let initinalarray: { id: number, type: string, amount: number, desc: string }[] = [];


function App() {
  const [transactions, settransactions] = useState(initinalarray);
  return (
    <div className="App">
      <Header transaction={transactions} />
      <TryWla transactions={transactions} settransactions={settransactions} />
      <Display_record transactions={transactions} settransactions={settransactions} />
    </div>  );}
export default App;