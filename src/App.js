import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Age from './Components/Age';
import Welcome from './Components/Weclome';
import Status
 from './Components/Status';

function App() {
  return (
    <>
      <Greet name = "Enid" nickName = "Dine"/>
      <button>Click</button>
      <Age year = "16"/>
      <Welcome name = "Enid" nickName = "Dine"/>
      <Status sal= "are you?"/>
     
    </>
  );
    
}

export default App;
