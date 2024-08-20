import React, {useState} from 'react';

function Usee(){
    const [count,setCount]= useState(0);

    return(
        <div>
            <h1>useState</h1>
            <h3> count1</h3>
            <button onClick={()=>setCount(count+1)}>click for increment</button>
            <h4>{count}</h4>
        </div>
    )
}

export default Usee;