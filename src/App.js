import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, {useState} from 'react';

import "./App.css";
import Alert from "./components/Alert";


function App() {

  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type //both names can be same
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () =>{ 
    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor = '#181151';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-4">
        <TextForms text="Enter Text " mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
