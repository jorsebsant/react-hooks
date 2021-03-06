import React, {useEffect, useState} from 'react';
import Form from './Form'
import '../styles/App.css';

function App() {

  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to Numbers Trivia!")

  // this hook acts like componentdidmount and didupdate at the same time, if we only want it to be executed one time
  // the second parameter should be an empty array, if we want it to update multiple times, the array should contain variables
  // and when those variables updates the hook will trigger as the didupdate lyfecicle
  useEffect(()=>{
    setTimeout(()=>{
      setWelcomeMessage("Try Out Our Trivia Generator!")
    }, 3000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="welcomeMessage">
          {welcomeMessage}
        </h1>
        <div id="result" style={{marginBottom: '15px'}}></div>
        <Form/>
      </header>
    </div>
  );
}

export default App;
