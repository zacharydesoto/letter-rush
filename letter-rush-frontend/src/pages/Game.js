import React, { useState } from "react"
import AnswerBar from "../components/AnswerBar"
import PreviousAnswers from "../components/PreviousAnswers";
import StatusMessage from "../components/StatusMessage";

export const STATUS = {
    START_GAME: "Start_game",
    INVALID_WORD: "Invalid_word",
    VALID_WORD: "Valid_word",
    SHORT_WORD: "Short_word",
    TIMEOUT: "Timeout"
};

export const RARITY = {
    COMMON: "Common",
    UNCOMMON: "Uncommon",
    RARE: "Rare",
    LEGENDARY: "Legendary",
    MYTHICAL: "Mythical",
    INVALID: "Invalid"
}

export default function Game() {
    const [previousAnswers, setPreviousAnswers] = useState([{ word: "Answer", score: "Score", rarity: "Rarity"}])
    const [status, setStatus] = useState(STATUS.START_GAME);
    const [answer, setAnswer] = useState({});

    return (
        <>
            <AnswerBar previousAnswers={previousAnswers} setPreviousAnswers={setPreviousAnswers} status={status} setStatus={setStatus} setAnswer={setAnswer} />
            <br />
            <StatusMessage status={status} answer={answer} />
            <br />
            <PreviousAnswers previousAnswers={previousAnswers} />
        </>
    )
}