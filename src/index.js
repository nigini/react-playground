import React from "react";
import { render } from 'react-dom';
import Hello from "./Hello";

let getName = () => {
    let params = new URLSearchParams(document.location.search);
    return params.get('name');
}

render(
    <Hello name={getName()}/>,
    document.getElementById('app')
);