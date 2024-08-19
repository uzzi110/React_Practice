import React from 'react';

function Hello(props) {
    const fromchildtoparent = "fromchild";

    return(
        <div>
            <button onClick={() => {props.fromchild(fromchildtoparent)}}> clcik me for function as lifting up</button>
        </div>

    )

}

export default Hello;