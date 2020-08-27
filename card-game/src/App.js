import React from 'react'; 
import './App.css'; 
import ScoreBoard from './ScoreBoard';

const word = "Hello";

function App() {
  return ( 
    <div className="bg"> 
      <ScoreBoard value={word}/>
    </div> 
  ); 
} 

export default App;
