import React, { useState } from "react"
import { getFrequency } from "../api/api";
import { STATUS } from "../pages/Game";

export default function AnswerBar({ previousAnswers, setPreviousAnswers, status, setStatus }) {
    const [word, setWord] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const frequency = await getFrequency(word);
        if (frequency < 2) {
            setStatus(STATUS.INVALID_WORD);
            return;
        }

        console.log("Word: ", word, " Frequency: ", frequency);

        setStatus(STATUS.VALID_WORD);
        const answer = { word: word, score: calculateScore(word, frequency), rarity: getRarity(frequency) };
        setPreviousAnswers([...previousAnswers, answer]);
      }
      
    function calculateScore(word, frequency) {
        return (word.length + (100 / frequency)).toFixed(2);
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