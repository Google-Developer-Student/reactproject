// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import MyForm from './component/MyForm';
import Alert from './component/Alert';
// import { useState } from 'react';
function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert=(message, type)=>{
     setAlert({
      msg: message,  
      type: type,
     })
    }
//  const [darkMode, setDarkMode] = useState('light')
//  const [darkMode, setDarkMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert('Dark mode has been enabled', 'Success')
    }

    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled', 'Succes')
    }
  }
  return (
    <>
      {/* props is a properities that we use it for changing component */}
      {/* <Navbar title='Textutils' abouttext='About' /> */}
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>  
      <Alert alert={alert}/>
      <div className='container my-3'>
        <MyForm heading="Enter your text to analyze" mode={mode}/>
        {/* <About /> */}
      </div>


    </>
  );
}

export default App;
