import React, { useEffect, useState } from "react";
import { STATUS } from "../pages/Game";

export default function Timer({ setStatus }) {
    const initialTime = 5;
    const [timeRemaining, setTimeRemaining] = useState(initialTime)

    let interval;

    useEffect(() => {
        interval = setInterval(updateTimer, 100); // 100 ms between function calls

        return () => clearInterval(interval); // Returning function to useEffect calls that function when the component unmounts
    }, [])

    function updateTimer() {
        setTimeRemaining((prevTime) => { // Arrow function used to avoid stale closure. Basically, using timeRemaining within a setInterval only uses the initial value.
            return (prevTime - 0.1).toFixed(1);
        });
    }

    useEffect(() => { // Put in separate useEffect to remove error for setting updating a component while rendering a different component
        if (timeRemaining <= 0) {
            setStatus(STATUS.TIMEOUT);
            clearInterval(interval);
            setTimeRemaining((0).toFixed(1));
        }
    }, [timeRemaining])

    return (
        <p>{timeRemaining}</p>
    )
}