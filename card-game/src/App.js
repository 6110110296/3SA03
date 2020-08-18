import React from 'react'; 
import './App.css'; 
import ScoreBoard from './ScoreBoard';

const word = "Hello";

function App() {
  return ( 
    <div> 
      <ScoreBoard value={word}/>
    </div> 
  ); 
} 

export default App;
