import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Age from './Components/Age';

function App() {
  return (
    <>
      <Greet name = "Enid" nickName = "Dine"/>
      <Age year = "16"/>
    </>
  );
    
}

export default App;
