import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Age from './Components/Age';
import Welcome from './Components/Weclome';

function App() {
  return (
    <>
      <Greet name = "Enid" nickName = "Dine"/>
      <button>Click</button>
      <Age year = "16"/>
      <Welcome name = "Enid" nickName = "Dine"/>
    </>
  );
    
}

export default App;
