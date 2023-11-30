import React from "react";

function Hello({name}) {
    return(
        <div>
            <h1>Hello, {!name ? 'CSE 340': name}!!!</h1>
        </div>
    )
}

export default Hello