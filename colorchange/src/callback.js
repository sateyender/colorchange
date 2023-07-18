import React,{useState} from "react";

const Callback=({getColor})=>{
    const [activecolor,setActiveColor]=useState(null);

    const handleChange=(e)=>{
        const{value}=e.target;
        setActiveColor(value);
        getColor(value);
    };
    return(
        <input type="text" id="input" aria-label="input" onChange={handleChange} value={activecolor} placeholder="Enter your colour name"/>
        
    );
};
export default Callback;