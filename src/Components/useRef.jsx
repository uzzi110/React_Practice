import React, {useRef} from 'react';

function Useref(){
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return(
        <div>
            <h1>useRef</h1>
            <input type="text" ref={inputRef} value="uzman"/>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Useref;