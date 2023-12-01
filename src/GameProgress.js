import React from "react";

function GameProgress({completionPerc}) {
    return(
        <div>
            <div className="progress" role="progressbar" aria-label="Game progess"
                 aria-valuenow={completionPerc} aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{width: `${completionPerc}%`}}></div>
            </div>
        </div>
    )
}

export default GameProgress