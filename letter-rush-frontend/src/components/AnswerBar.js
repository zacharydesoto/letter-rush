import React, { useState } from "react"
import { getFrequency } from "../api/api";
import { STATUS, RARITY } from "../pages/Game";

export default function AnswerBar({ previousAnswers, setPreviousAnswers, status, setStatus, setAnswer }) {
    const [word, setWord] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const frequency = await getFrequency(word);
        if (frequency < 2 || word.length < 4) {
            setStatus(frequency < 2 ? STATUS.INVALID_WORD : STATUS.SHORT_WORD);
            setAnswer({ word: word, score: 0, rarity: RARITY.INVALID })
            return;
        }

        setStatus(STATUS.VALID_WORD);
        const answer = { word: word, score: calculateScore(word, frequency), rarity: getRarity(frequency) };
        console.log("Answer: ", answer)
        setAnswer(answer);
        setPreviousAnswers([...previousAnswers, answer]);
      }

    function calculateScore(word, frequency) {
        return Math.round(word.length + (100 / frequency));
    }

    function getRarity(frequency) {
        return (frequency < 4) ? "Legendary" : "Common";
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Word:
                <input type='text' className='font-bold underline text-3xl text-wrap' value={word} onChange={(e) => setWord(e.target.value)} />
            </label>
            <div className='font-bold text-3xl'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}