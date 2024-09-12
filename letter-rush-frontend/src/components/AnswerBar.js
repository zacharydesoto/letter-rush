import React, { useState } from "react"
import { getFrequency } from "../api/api";
import { STATUS, RARITY } from "../pages/Game";

export default function AnswerBar({ previousAnswers, setPreviousAnswers, status, setStatus, setAnswer }) {
    const [word, setWord] = useState("");

    async function handleSubmit(e) {
        e.preventDefault(); // Prevents reloading page

        if (status === STATUS.TIMEOUT) // Should not be able to submit
            return;

        if (word.length == 0)
            return;

        if (word.length < 4) {
            setStatus(STATUS.SHORT_WORD);
            setAnswer({ word: word, score: 0, rarity: RARITY.INVALID });
            setWord("");
            return;
        }

        if (word.split(/\s+/).length > 1) { // Multiple words
            setStatus(STATUS.MULTIPLE_WORDS);
            setAnswer({ word: word, score: 0, rarity: RARITY.INVALID });
            setWord("");
            return;
        }

        const frequency = await getFrequency(word); // Calls api function, frequency ranges from 1.0 to 8.0, but usually from ~3 to ~6
        if (frequency < 0.1) { // Checks for valid word
            setStatus(STATUS.INVALID_WORD);
            setAnswer({ word: word, score: 0, rarity: RARITY.INVALID });
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
        let rarity = getRarity(frequency)
        const answer = { word: word, score: calculateScore(word, frequency, rarity), rarity: rarity };
        setAnswer(answer);
        setWord(""); // Clears word input
        setPreviousAnswers([...previousAnswers, answer]);
    }

    function calculateScore(word, frequency, rarity) {
        let multipliers = { [RARITY.COMMON]: 1, [RARITY.UNCOMMON]: 1.25, [RARITY.RARE]: 1.5, [RARITY.LEGENDARY]: 1.75, [RARITY.MYTHICAL]: 2 }
        let score = word.length + (400 / (frequency ** 2));
        score *= multipliers[rarity];
        return Math.round(score);
    }

    function getRarity(frequency) {
        let rarity;
        if (frequency < 3)
            rarity = RARITY.MYTHICAL
        else if (frequency >= 3 && frequency < 3.5)
            rarity = RARITY.LEGENDARY
        else if (frequency >= 3.5 && frequency < 4)
            rarity = RARITY.RARE
        else if (frequency >= 4 && frequency < 4.5)
            rarity = RARITY.UNCOMMON
        else
            rarity = RARITY.COMMON
        console.log("Frequency is ", frequency, " so rarity is ", rarity)
        return rarity;
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