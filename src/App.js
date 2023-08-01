
import { useState } from 'react';
import Countdown from './component/countdown/Countdown';



function App() {

    const [countDown, setCountDown] = useState(false);


    const openCountDown = () =>{

      setCountDown(true);
    }

    const closeCountDown = () =>{
      
      setCountDown(false)
    }





  return (
    <>
    <p onClick={openCountDown}>hey</p>

    {countDown && <Countdown closebtn={countDown} onClose={closeCountDown} />}

    </>
  );
}

export default App;
