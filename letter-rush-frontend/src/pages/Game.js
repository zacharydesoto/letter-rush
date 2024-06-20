import React, { useState } from "react"
import AnswerBar from "../components/AnswerBar"
import PreviousAnswers from "../components/PreviousAnswers";

export const STATUS = {
    START_GAME: "Start_game",
    INVALID_WORD: "Invalid_word",
    VALID_WORD: "Valid_word",
    TIMEOUT: "Timeout"
};

export default function Game() {
    const [previousAnswers, setPreviousAnswers] = useState([{ word: "Answer", score: "Score", rarity: "Rarity"}])
    const [status, setStatus] = useState(STATUS.START_GAME);

    return (
        <>
            <AnswerBar previousAnswers={previousAnswers} setPreviousAnswers={setPreviousAnswers} status={status} setStatus={setStatus} />

            <PreviousAnswers previousAnswers={previousAnswers} />
        </>
    )
}