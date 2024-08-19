//high order components

import React, {useState} from 'react';

function HighOrder() {

    const [count, setcount] = useState(0);

    const handleclick = () => {
        setcount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleclick}>click for HighOrder function</button>
        </div>
    

    )
}

export default HighOrder;