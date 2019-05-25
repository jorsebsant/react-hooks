import React, {useEffect} from 'react';
import Form from './Form'
import '../styles/App.css';

function App() {

  // this hook acts like componentdidmount and didupdate at the same time, if we only want it to be executed one time
  // the second parameter should be an empty array, if we want it to update multiple times, the array should contain variables
  // and when those variables updates the hook will trigger as the didupdate lyfecicle
  useEffect(()=>{
    setTimeout(()=>{
      const welcomeMessage = document.getElementById("welcomeMessage")
      welcomeMessage.innerHTML =  "Try Out Our Trivia Generator!"
    }, 3000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="welcomeMessage">Welcome to Numbers Trivia!</h1>
        <Form/>
      </header>
    </div>
  );
}

export default App;
