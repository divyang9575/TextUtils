import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, {useState} from 'react';

import "./App.css";


function App() {

  const [mode , setMode] = useState('light');
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181151';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForms text="Enter Text " mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
