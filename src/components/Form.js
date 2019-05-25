import React, { useState } from 'react';
import axios from 'axios'

function Form(){
  // the first parameter returned is the current state, and the second one is the function that updates it
  // the only parameter sent is the initial value
  let [number, setNumber] = useState("random");

  let [type, setType] = useState("trivia");

  function onNumberChanged(e){

    const value = e.target.value.trim();

    if(!value.length){
      setNumber("random"); //default value
    } else {
      setNumber(value);
    }
  }
  
  function onTypeChanged(e){

    const value = e.target.value.trim();

    if(!value.length) {
      setType("trivia"); //default value
    } else {
      setType(value);
    }
  }

  function onSubmit(e){

    e.preventDefault();

    axios.get('http://numbersapi.com/' + number + '/' + type)
      .then(function(response){
        const elm = document.getElementById('result');
        elm.innerHTML = response.data;
      }).catch(function(e){
        console.log("error", e); //simple error handling
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="number" value={number} onChange={onNumberChanged} placeholder="Enter a number (Optional)" />
      </div>
      <div>
        <select name="type" value={type} onChange={onTypeChanged}>
        <option value="trivia">Trivia</option>
        <option value="math">Math</option>
        <option value="date">Date</option>
        <option value="year">Year</option>
        </select>
      </div>
      <button type="submit">Generate</button>
    </form>
  );
}

export default Form;
