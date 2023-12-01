import React from "react";

function GameButton({disabled, actionText, onButtonClick}) {
    return(
        <div>
            <button type="button" className="btn btn-dark" onClick={onButtonClick} disabled={disabled}>
                {actionText}
            </button>
        </div>
    )
}

export default GameButton