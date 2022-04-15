import './App.scss';
import LoginOverlay from './components/LoginWidget/LoginWidget';
import OperatingSystemPage from './components/OperatingSystemPage/OperatingSystemPage'
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {

  const [isOverlayActivated, setIsOverlayActivated] = useState(true);
  
  const onOverlayActivationChange = (changedTo) => {
    setIsOverlayActivated(changedTo);
  };

  return (
    <div className="App">
      <LoginOverlay onOverlayActivationChange={onOverlayActivationChange}/>
      { 
        !isOverlayActivated? <OperatingSystemPage onOverlayActivationChange={onOverlayActivationChange}/> : null
      }
      <ToastContainer />
    </div>
  );
}

export default App;
