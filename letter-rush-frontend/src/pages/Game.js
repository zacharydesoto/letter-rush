import React, { useState } from "react"
import AnswerBar from "../components/AnswerBar"
import PreviousAnswers from "../components/PreviousAnswers";
import StatusMessage from "../components/StatusMessage";
import Timer from "../components/Timer";
import RestartButton from "../components/RestartButton";

export const STATUS = {
    START_GAME: "Start_game",
    INVALID_WORD: "Invalid_word",
    SHORT_WORD: "Short_word",
    DUPLICATE_WORD: "Duplicate_word",
    MULTIPLE_WORDS: "Multiple_words",
    VALID_WORD: "Valid_word",
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
    const [previousAnswers, setPreviousAnswers] = useState([{ word: "Answer", score: "Score", rarity: "Rarity" }])
    const [status, setStatus] = useState(STATUS.START_GAME);
    const [answer, setAnswer] = useState({});

    return (
        <>
            <div className="ml-5 mt-5">
                <AnswerBar previousAnswers={previousAnswers} setPreviousAnswers={setPreviousAnswers} status={status} setStatus={setStatus} setAnswer={setAnswer} />
                <br />
                <StatusMessage status={status} answer={answer} />
                <br />
                <Timer status={status} setStatus={setStatus} />
                <RestartButton status={status} setStatus={setStatus} setPreviousAnswers={setPreviousAnswers} />
                <br />
                <PreviousAnswers previousAnswers={previousAnswers} />
            </div>
        </>
    )
}