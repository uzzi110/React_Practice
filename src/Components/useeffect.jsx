import React, {useState, useEffect} from 'react';

function Usee(){
    const [count,setCount]= useState(0);
    const [name,setName]= useState("")

    // useEffect(()=>{
    //     console.log('useeffect hook called');
    // });

    // useEffect(()=>{
    //     console.log('useeffect hook called');
    // }, []);

    useEffect(()=>{
        console.log('useeffect hook called only on state change of name');
    }, [name]);

    return(
        <div>
            <h3>useeffect</h3>
            <button onClick={()=>setCount(count+1)}>click for increment</button>
            <h4>{count}</h4>

            <br />
            <br />
            <button onClick={() => setName("uzman")}>Change name to "uzman"</button>
            <p>My name is: {name}</p>
        </div>
    )
}

export default Usee;