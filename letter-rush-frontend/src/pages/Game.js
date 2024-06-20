import React, { useState } from "react"
import AnswerBar from "../components/AnswerBar"
import PreviousAnswers from "../components/PreviousAnswers";

export default function Game() {
    const [frequency, setFrequency] = useState(0);
    const [previousAnswers, setPreviousAnswers] = useState([{word : "Answers", score: "0", rarity: "Legendary" }, {word: "test2", score: "100", rarity: "common"}])
    // const previousAnswers = [{word : "Answers", score: "0", rarity: "Legendary" }, {word: "test2", score: "100", rarity: "common"}];

    return (
        <>
            <AnswerBar setFrequency={setFrequency} setPreviousAnswers={setPreviousAnswers} />
            <p>Frequency {frequency}</p>

            <PreviousAnswers previousAnswers={previousAnswers} />
        </>
    )
}