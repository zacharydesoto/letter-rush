import React from "react";
import { STATUS } from "../pages/Game";

export default function RestartButton({ status, setStatus }) {
    function restartGame() {
        setStatus(STATUS.START_GAME);
    }

    return (
        <div className="p-1 my-2">
            {status === STATUS.TIMEOUT ? 
                <button className="p-1 bg-purple-200 outline rounded-md outline-blue-600" onClick={restartGame}>Restart Game</button>
                :
                <span className="p-1">&nbsp;&nbsp;</span>
            }
        </div>
    )
}