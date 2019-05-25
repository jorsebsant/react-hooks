import React from 'react';  

function Form(props){
  return (
    <form>
      <div>
        <input type="text" name="number" placeholder="Enter a number (Optional)" />
      </div>
      <div>
        <select name="type">
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