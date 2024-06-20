import React, { useState } from "react"
import AnswerBar from "../components/AnswerBar"

export default function Game() {
    const [frequency, setFrequency] = useState(0);

    return (
        <>
            <AnswerBar setFrequency={setFrequency} />
            <div className='font-bold text-xl'>
                <p>Frequency: {frequency}</p>
            </div>
        </>
    )
}