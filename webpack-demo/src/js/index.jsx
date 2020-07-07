import React, { Component,useState,useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [inputN, setInput] = useState(0);
    const [result,setResult] = useState(inputN+1);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You just set n = ${inputN}`;
  });
  
  return (
    
    <>
        <p>Set your number n right below:<br/><br/> 
        <label for="inputN">n=</label>
        <input type="number" value = {inputN} onChange={e => setInput(e.target.value)} name="n =   " />
        <br/><br/> 
        you just set n = {inputN} <br/><br/> 
        <button onClick={() => setResult(Number(inputN) + 1)}>
        Click me to see f(n) = n+1
        </button>
        <br/><br/> 
        f(n) = n+1 = {result} </p>
    </>
  );
};


const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);