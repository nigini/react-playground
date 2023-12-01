import React from "react";

function Hello({name}) {
    return(
        <div>
            <h1 className={"text-center"}>
                Hello, {!name ? 'CSE 340': name}!!!
            </h1>
        </div>
    )
}

export default Hello