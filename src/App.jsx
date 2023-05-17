import React , {useState} from 'react'
import './App.css';

let time=new Date().toLocaleTimeString();

function App() 
{
  const [newtime ,setTime]=useState(time);

  const updateTime =()=>
  {
    time=new Date().toLocaleTimeString();
    setTime(time)
  };
  

  setInterval(updateTime,1000);
  return(<div className="main">
    
       <div className="clock">
       <h3>{newtime}</h3>
       </div>
       



         </div>
  )
}

export default App;
