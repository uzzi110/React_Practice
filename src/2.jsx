import React from 'react';

function Hello(props) {


    return (
        // <div>
        //     <h1>Hello, World by C2!</h1>
        //     <button onClick={props.HelloProp}> clcik me for function as prop</button>

        // </div>

        <div>
            {/* if(props.name){
                <h1>Hello, World by C2! {props.name}</h1>
            }
            <h1>no name pass by prop {props.name}</h1> */}


            {/* wrong becuase we cant use the if else directly in return for this we can use the ternary opertor instead */}

            {props.name ? (<h1>props came in conditional</h1>) : <h1>no name pass by prop</h1>}
        </div>

    )
}

export default Hello;