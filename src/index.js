import React, {useState} from "react";
import { createRoot } from 'react-dom/client';
import Hello from "./Hello";
import GameButton from "./GameButton";
import GameProgress from "./GameProgress";



let container = document.getElementById('app')
let root = createRoot(container)
root.render(
    <Page/>
);

function Page() {
    //PAGE CONFIG
    const MAX_CLICKS = 10
    //PAGE STATE
    const [clickCount, setCount] = useState(0)
    const [progress, setProgress] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    let getName = () => {
        let params = new URLSearchParams(document.location.search);
        return params.get('name');
    }

    let incrementGameState = () => {
        setCount(clickCount+1)
        setProgress(Math.floor(clickCount/MAX_CLICKS*100))
        console.log(`PROGESS: ${progress}`)
        if(clickCount >= MAX_CLICKS) {
            console.log('GAME OVER!')
            setGameOver(true)
        }
    }

    return (
        <div>
            <Hello name={getName()}/>
            <GameProgress completionPerc={progress}/>
            <GameButton  disabled={gameOver} actionText={"Click ME!"} onButtonClick={incrementGameState}/>
        </div>
    )

}