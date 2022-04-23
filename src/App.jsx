import './App.scss';
import LoginOverlay from './components/LoginWidget/LoginWidget';
import OperatingSystemPage from './components/OperatingSystemPage/OperatingSystemPage'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [isOverlayActivated, setIsOverlayActivated] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const appRef = React.createRef();
  //const [easterEggString, setEasterEggString] = useState('');
  let easterEggString = '';
  
  const onOverlayActivationChange = (changedTo) => {
    setIsOverlayActivated(changedTo);
  };

  
  const easterEggToast = () => toast(`You just found my CONDA easteregg! 😊`, {
    theme: "dark",
    position: "bottom-left",
    autoClose: 7000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'easterEggToast'
});

  const verifyString = (newKey) => {
    console.log(easterEggString);
    //setEasterEggString(easterEggString.concat(newKey));
    easterEggString = easterEggString.concat(newKey);

    

    switch (easterEggString) {
      case "c":
        console.log('case c');
        break;
      case "co":
        console.log('case co');
        break;
      case "con":
        console.log('case con');
        break;
      case "cond":
        console.log('case cond');
        break;
      case "conda":
        console.log('case conda');
        easterEggToast();
        break;
    
      default:
        console.log('case default');
        easterEggString = '';
        break;
    }
  }

  useEffect(() => {
    setIsInitialized(true);
  }, [])

  useEffect(() => {
    appRef.current.onkeypress = (event) => {
        verifyString(event.key);
    }
  }, isInitialized)

  return (
    <div tabindex="0" ref={appRef} className="App">
      <LoginOverlay onOverlayActivationChange={onOverlayActivationChange}/>
      { 
        !isOverlayActivated? <OperatingSystemPage onOverlayActivationChange={onOverlayActivationChange}/> : null
      }
      <ToastContainer />
    </div>
  );
}

export default App;
