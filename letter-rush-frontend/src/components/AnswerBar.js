import React, { useState } from "react"
import { getFrequency } from "../api/api";
import { STATUS, RARITY } from "../pages/Game";

export default function AnswerBar({ previousAnswers, setPreviousAnswers, status, setStatus, setAnswer }) {
    const [word, setWord] = useState("");

    async function handleSubmit(e) {
        e.preventDefault(); // Prevents reloading page

        if (status === STATUS.TIMEOUT) // Should not be able to submit
            return;

        const frequency = await getFrequency(word); // Calls api function
        if (frequency < 2 || word.length < 4) { // Checks for valid word
            setStatus(frequency < 2 ? STATUS.INVALID_WORD : STATUS.SHORT_WORD);
            setAnswer({ word: word, score: 0, rarity: RARITY.INVALID })
            setWord("");
            return;
        }

        for (let i = 0; i < previousAnswers.length; i++) { // Checks for duplicate word
            if (previousAnswers[i].word === word) {
                setStatus(STATUS.DUPLICATE_WORD);
                setAnswer({ word: word, score: 0, rarity: RARITY.INVALID })
                setWord("");
                return;
            }
        }

        setStatus(STATUS.VALID_WORD);
        const answer = { word: word, score: calculateScore(word, frequency), rarity: getRarity(frequency) };
        setAnswer(answer);
        setWord("");
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
                <input type='text' disabled={status === STATUS.TIMEOUT} className='rounded-md border border-gray-400 p-3 mb-5' value={word} onChange={(e) => setWord(e.target.value)} />
            </label>

            <div className='font-bold text-3xl'>
                {status !== STATUS.TIMEOUT ?
                    <button type='submit'>Submit</button>
                    :
                    <span>&nbsp;</span>
                }
            </div>
        </form>
    )
}