import React, {useState, useMemo} from 'react';

function Usee(){
    const [count,setCount]= useState(0);
    const [name,setName]= useState("")

    const usememo = useMemo(() =>
    {
        console.log("anotherfunction");
        return count*2;
        
    }, [count])

    // function usememo()
    // {
    //     console.log("anotherfunction");
    //     return count*2;
        
    // }

    return(
        <div>
            <h3> usememo</h3>
            <button onClick={()=>setCount(count+1)}>click for increment</button>
            <h4>{count}</h4>

            <h4>{usememo}</h4>

            <br />
            <br />
            <button onClick={() => setName("uzman")}>Change name to "uzman"</button>
            <p>My name is: {name}</p>
        </div>
    )
}

export default Usee;