import React, {useState} from "react";
import { createRoot } from 'react-dom/client';
import Hello from "./Hello";
import GameButton from "./GameButton";



let container = document.getElementById('app')
let root = createRoot(container)
root.render(
    <Page/>
);

function Page() {
    //PAGE STATE
    const [clickCount, setCount] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    let getName = () => {
        let params = new URLSearchParams(document.location.search);
        return params.get('name');
    }

    let incrementGameState = () => {
        setCount(clickCount+1)
        console.log(`STATE: ${clickCount}`)
        if(clickCount > 5) {
            console.log('GAME OVER!')
            setGameOver(true)
        }
    }

    return (
        <div>
            <Hello name={getName()}/>
            <GameButton  disabled={gameOver} actionText={"Click ME!"} onButtonClick={incrementGameState}/>
        </div>
    )

}