import React,{useState} from 'react';
import './style.css';
import Callback from './callback';


export default function App() {
  const [UIcolor,setUIColor]=useState(null);
  const getColor=(color)=>{
    setUIColor(color);
  };
  return (
    <div className="App" style={{border:'1px solid black'}}>
      <div className="App_color_container" style={{background:`${UIcolor}`}}>
     
      </div>
      
      <Callback getColor={getColor}/>

    </div>
  );
}


