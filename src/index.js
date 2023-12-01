import React from "react";
import { createRoot } from 'react-dom/client';
import Hello from "./Hello";

let getName = () => {
    let params = new URLSearchParams(document.location.search);
    return params.get('name');
}

let container = document.getElementById('app')
let root = createRoot(container)
root.render(
    <Hello name={getName()}/>
);